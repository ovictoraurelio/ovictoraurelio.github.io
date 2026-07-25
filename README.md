# Victor Aurélio

Site pessoal de Victor Aurélio, construído como uma Single Page Application
com pré-renderização estática (SSG) e internacionalização pt/en.

## Stack

- [Vue 3](https://vuejs.org/) (Options API)
- [Vite](https://vitejs.dev/) + [vite-ssg](https://github.com/antfu/vite-ssg) para build e pré-renderização estática (SSG)
- [WindiCSS](https://windicss.org/) para estilos utilitários (via `vite-plugin-windicss`)
- [vue-router](https://router.vuejs.org/) e [vue-i18n](https://vue-i18n.intlify.dev/) (locales `pt`/`en` em `src/locales`)
- [@iconify/vue](https://iconify.design/) para ícones
- Templates escritos em Pug (`lang="pug"` nos componentes `.vue`)

## Desenvolvimento

Instalar dependências:

```
npm install
```

Rodar em modo desenvolvimento (com hot-reload):

```
npm run dev
```

Gerar o build de produção (Vite + SSG):

```
npm run build
```

Servir o build gerado localmente:

```
npm run preview
```

Rodar o linter (ESLint, com correção automática):

```
npm run lint
```

Formatar o código (Prettier):

```
npm run format
```

## Estrutura

- `src/views` — páginas roteadas (Home, Contact, Calendar, Privacy, Terms)
- `src/components` — componentes reutilizáveis (Infos, History, Projects, Skills, Footer, CookieConsent) e `src/components/ui` para componentes de UI compartilhados (ex. `Button.vue`)
- `src/locales` — arquivos de tradução `pt.js` e `en.js`
- `src/services` — dados estáticos (ex. timeline de experiência profissional)
- `windi.config.js` — tokens de design (cores e tipografia) usados pelo WindiCSS

## Serviço `api/`

O diretório `api/` contém um serviço auxiliar em Go, independente do front-end,
responsável por receber webhooks do site (por exemplo, envio do formulário de
contato e rastreamento de acesso/páginas visitadas).

## Deploy

O deploy é automatizado via GitHub Actions (`.github/deploy.yml`): a cada push
em `main` (ou merge de pull request), o workflow instala as dependências, roda
`npm run build` e publica o conteúdo de `dist/` no branch `gh-pages`, usado
pelo GitHub Pages. O domínio customizado é configurado através do arquivo
`CNAME`, copiado para `dist/` durante o build.
