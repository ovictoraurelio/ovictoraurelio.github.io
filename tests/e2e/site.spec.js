const { expect, test } = require('@playwright/test')

const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:4173'
const MOBILE_USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
const DESKTOP_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

const enableConsentByDefault = async (page) => {
  await page.addInitScript(() => {
    document.cookie =
      'cookiesAccepted=true; path=/; max-age=31536000; SameSite=Lax'
  })
}

const collectErrors = (page) => {
  const logs = []
  page.on('console', (message) => {
    if (message.type() === 'error') {
      logs.push(message.text())
    }
  })
  page.on('pageerror', (error) => {
    logs.push(error.message)
  })

  return logs
}

const fillContactForm = async (page, data) => {
  await page.getByRole('textbox', { name: /Nome|Name/i }).fill(data.name)
  await page.getByRole('textbox', { name: /Telefone|Phone/i }).fill(data.phone)
  await page.getByRole('textbox', { name: /Email|E-mail/i }).fill(data.email)
  await page
    .getByRole('textbox', { name: /Mensagem|Message/i })
    .fill(data.message)
}

const createDesktopPage = async (page) => {
  const browser = page.context().browser()
  const desktopContext = await browser.newContext({
    locale: 'pt-BR',
    userAgent: DESKTOP_USER_AGENT,
    viewport: { width: 1280, height: 900 }
  })
  const desktopPage = await desktopContext.newPage()
  await desktopPage.addInitScript(() => {
    document.cookie =
      'cookiesAccepted=true; path=/; max-age=31536000; SameSite=Lax'
  })

  return { context: desktopContext, page: desktopPage }
}

const createMobilePage = async (page) => {
  const browser = page.context().browser()
  const mobileContext = await browser.newContext({
    locale: 'pt-BR',
    userAgent: MOBILE_USER_AGENT,
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  })
  const mobilePage = await mobileContext.newPage()
  await mobilePage.addInitScript(() => {
    document.cookie =
      'cookiesAccepted=true; path=/; max-age=31536000; SameSite=Lax'
  })

  return { context: mobileContext, page: mobilePage }
}

const mockRoam = async (page) => {
  await page.route('**/ro.am/lobbylinks/embed.js', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: `window.Roam = { initLobbyEmbed: ({parentElement, url, onSizeChange}) => {
      const content = document.createElement('p');
      content.textContent = 'Horários disponíveis';
      content.dataset.bookingUrl = url;
      parentElement.appendChild(content);
      onSizeChange(1200, 360);
    }};`
    })
  )
}

test.describe('victoraurelio.com', () => {
  test('carrega a home, alterna idioma e não registra erro de runtime', async ({
    page
  }) => {
    const errors = collectErrors(page)
    await enableConsentByDefault(page)

    await page.goto('/')

    await expect(
      page.locator('span').filter({ hasText: 'Victor Aurélio' }).first()
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: 'English', exact: true })
    ).toBeVisible()

    const scheduleLink = page.locator('.hero-actions').getByRole('link', {
      name: /(Agendar uma reunião|Schedule meeting)/i
    })
    const currentScheduleLabel = (await scheduleLink.textContent()).trim()
    await page.getByRole('button', { name: 'English', exact: true }).click()
    await expect(scheduleLink).not.toHaveText(currentScheduleLabel)
    const newLocale = 'en'
    await expect(page.locator('html')).toHaveAttribute('lang', newLocale)
    await expect(page).toHaveTitle(
      'Victor Aurélio | Chief of AI at Extreme Group'
    )
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('lang', newLocale)
    await expect(scheduleLink).not.toHaveText(currentScheduleLabel)
    await expect(page.locator('.project-card')).toHaveCount(3)
    expect(errors).toEqual([])
  })

  test('submete formulário de contato com sucesso quando endpoint retorna OK', async ({
    page
  }) => {
    await enableConsentByDefault(page)

    let requestCount = 0
    await page.route('**/webhooks/contact-message', (route) => {
      requestCount += 1
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Mensagem recebida com sucesso!'
        })
      })
    })

    await page.goto('/contact')

    await fillContactForm(page, {
      name: 'Victor Test',
      phone: '(11) 98888-1234',
      email: 'teste@exemplo.com',
      message: 'Mensagem de teste do e2e'
    })

    await page
      .getByRole('button', { name: /Enviar Mensagem|Send Message/i })
      .click()

    await expect(requestCount).toBe(1)
    await expect(
      page.getByText(
        /sua mensagem foi enviada com sucesso|message.*sent successfully/i
      )
    ).toBeVisible()
  })

  test('exibe erro do servidor quando endpoint retorna 400', async ({
    page
  }) => {
    await enableConsentByDefault(page)

    await page.route('**/webhooks/contact-message', (route) => {
      route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          message: 'Invalid email'
        })
      })
    })

    await page.goto('/contact')
    await fillContactForm(page, {
      name: 'Victor Test',
      phone: '(11) 98888-1234',
      email: 'cliente@exemplo.com',
      message: 'Mensagem de teste do e2e'
    })

    await page
      .getByRole('button', { name: /Enviar Mensagem|Send Message/i })
      .click()

    await expect(
      page.getByText(
        /invalid email|ocorreu um erro ao enviar sua mensagem|there was an error sending your message/i
      )
    ).toBeVisible()
  })

  test('bloqueia envio com validação local no formulário de contato', async ({
    page
  }) => {
    await enableConsentByDefault(page)
    await page.goto('/contact')

    await fillContactForm(page, {
      name: 'a'.repeat(130),
      phone: '(11) 98888-1234',
      email: 'valido@exemplo.com',
      message: 'Mensagem de teste do e2e'
    })

    await page
      .getByRole('button', { name: /Enviar Mensagem|Send Message/i })
      .click()
    await expect(
      page.getByText(
        /nome com até 120 caracteres|name with up to 120 characters/i
      )
    ).toBeVisible()
  })

  test('mantém os mesmos conteúdos no celular, com menu e projetos acessíveis', async ({
    page
  }) => {
    const { context, page: mobilePage } = await createMobilePage(page)
    await mobilePage.goto(`${BASE_URL}/`)
    await expect(mobilePage.getByRole('heading', { level: 1 })).toContainText(
      'Inteligência que'
    )
    await expect(mobilePage.locator('.project-card')).toHaveCount(3)
    await mobilePage.getByRole('button', { name: 'Abrir menu' }).click()
    await mobilePage
      .getByRole('navigation', { name: 'Navegação principal' })
      .getByRole('link', { name: 'Projetos' })
      .click()
    await expect(mobilePage).toHaveURL(`${BASE_URL}/#projects`)
    await expect(
      mobilePage.getByRole('button', { name: 'Abrir menu' })
    ).toHaveAttribute('aria-expanded', 'false')
    await expect
      .poll(() =>
        mobilePage
          .locator('#projects')
          .evaluate((el) => Math.round(el.getBoundingClientRect().top))
      )
      .toBeGreaterThanOrEqual(68)
    await expect
      .poll(() =>
        mobilePage
          .locator('#projects')
          .evaluate((el) => Math.round(el.getBoundingClientRect().top))
      )
      .toBeLessThan(130)
    await mobilePage
      .getByRole('button', { name: 'Detalhes do projeto: Nutrição Total' })
      .click()
    await expect(mobilePage.locator('#project-1')).toContainText('agendamento')
    await mobilePage
      .getByRole('button', { name: 'Ver todos os projetos' })
      .click()
    await expect(mobilePage.locator('.project-card')).toHaveCount(11)
    await context.close()
  })

  test('permite navegar na primeira visita e fechar o aviso sem aceitar cookies', async ({
    page
  }) => {
    await page.goto('/')
    await expect(page.locator('.cookie-consent-banner')).toBeVisible()
    await page.getByRole('button', { name: 'Fechar aviso de cookies' }).click()
    await expect(page.locator('.cookie-consent-banner')).toHaveCount(0)
    expect(
      (await page.context().cookies()).find(
        (cookie) => cookie.name === 'cookiesAccepted'
      )
    ).toBeUndefined()
    await page.reload()
    await expect(page.locator('.cookie-consent-banner')).toHaveCount(0)
    await page
      .locator('.hero-actions')
      .getByRole('link', { name: 'Agendar uma reunião' })
      .click()
    await expect(page).toHaveURL(`${BASE_URL}/calendar`)
  })

  test('carrega agenda selecionada no celular, troca duração e mantém aliases', async ({
    page
  }) => {
    const { context, page: mobilePage } = await createMobilePage(page)
    await mockRoam(mobilePage)
    await mobilePage.goto(`${BASE_URL}/agenda`)
    await mobilePage
      .getByRole('button', { name: '30 minutos', exact: true })
      .click()
    await expect(mobilePage.locator('.calendar-embed')).toContainText(
      'Horários disponíveis'
    )
    await expect(mobilePage.locator('[data-booking-url]')).toHaveAttribute(
      'data-booking-url',
      'https://ro.am/ovictoraurelio/'
    )
    await mobilePage
      .getByRole('button', { name: '1 hora', exact: true })
      .click()
    await expect(mobilePage.locator('[data-booking-url]')).toHaveAttribute(
      'data-booking-url',
      'https://ro.am/ovictoraurelio/1-hora'
    )
    expect(
      await mobilePage.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth
      )
    ).toBe(true)
    await mobilePage.getByRole('button', { name: 'Trocar duração' }).click()
    await expect(mobilePage.locator('.calendar-panel')).toHaveCount(0)
    await mobilePage.goto(`${BASE_URL}/calendario`)
    await expect(
      mobilePage.getByRole('button', { name: '30 minutos', exact: true })
    ).toBeVisible()
    await context.close()
  })

  test('oferece acesso direto quando o serviço da agenda falha', async ({
    page
  }) => {
    const { context, page: desktopPage } = await createDesktopPage(page)
    const errors = collectErrors(desktopPage)
    await desktopPage.route('**/ro.am/lobbylinks/embed.js', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/javascript',
        body: ''
      })
    )
    await desktopPage.goto(`${BASE_URL}/calendar`)
    await desktopPage
      .getByRole('button', { name: '30 minutos', exact: true })
      .click()
    await expect(
      desktopPage.getByText('A agenda não carregou por aqui.', { exact: false })
    ).toBeVisible()
    await expect(
      desktopPage.getByRole('link', { name: 'Abrir agenda' })
    ).toHaveAttribute('href', 'https://ro.am/ovictoraurelio/')
    expect(errors).toEqual([])
    await context.close()
  })

  test('preserva foto, cargo, biografia, projetos e trajetória da main atual', async ({
    page
  }) => {
    await enableConsentByDefault(page)
    await page.goto('/')
    await expect(page.locator('.hero-copy .eyebrow')).toHaveText(
      'Chief of AI no Extreme Group'
    )
    await expect(page).toHaveTitle(
      'Victor Aurélio | Chief of AI no Extreme Group'
    )
    await expect(page.locator('.portrait-frame img')).toHaveAttribute(
      'src',
      '/victor-aurelio.jpg'
    )
    await expect
      .poll(() =>
        page.locator('.portrait-frame img').evaluate((img) => img.naturalWidth)
      )
      .toBe(715)
    await expect(page.locator('.current-role')).toContainText(
      'desde dezembro de 2025'
    )
    await expect(page.locator('.impact-strip')).toContainText('43 mil+')
    await expect(page.locator('.impact-strip')).toContainText('96%')
    await page.getByText('Um pouco mais sobre mim', { exact: true }).click()
    await expect(page.locator('.long-bio')).toContainText(
      'liderar mais de 60 pessoas'
    )
    await expect(page.locator('.long-bio')).toContainText(
      'Prefeitura do Recife'
    )
    await expect(page.locator('.project-card').first()).toContainText('Absens')
    await expect(page.locator('.project-card').nth(1)).toContainText(
      'fundador e CTO da Septo Mobile'
    )
    await page.getByRole('button', { name: 'Ver trajetória completa' }).click()
    await expect(page.locator('.timeline-row')).toHaveCount(13)
    await expect(
      page.locator('.timeline-row').filter({ hasText: 'Septo Mobile' })
    ).toContainText('Fundador & CTO')
    await page.getByRole('button', { name: 'English', exact: true }).click()
    await expect(page.locator('.hero-copy .eyebrow')).toHaveText(
      'Chief of AI at Extreme Group'
    )
    await expect(page).toHaveTitle(
      'Victor Aurélio | Chief of AI at Extreme Group'
    )
    await expect(
      page.locator('.timeline-row').filter({ hasText: 'Septo Mobile' })
    ).toContainText('Founder & CTO')
  })

  test('não corta conteúdos nas larguras de celular, tablet e desktop', async ({
    page
  }) => {
    await enableConsentByDefault(page)
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 })
      for (const route of [
        '/',
        '/contact',
        '/calendar',
        '/privacy',
        '/terms'
      ]) {
        await page.goto(route)
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth
          ),
          `overflow at ${route}, ${width}px`
        ).toBe(true)
      }
    }
  })
})
