const firstDayWorkingAsDev = new Date(2012, 3, 1)
const yearsFromFirstDayToNow =
  new Date().getFullYear() - firstDayWorkingAsDev.getFullYear()
export default {
  language: 'language',
  contact: {
    title: 'Contact Me',
    form: {
      name: 'Name',
      namePlaceholder: 'Enter your name',
      phone: 'Phone',
      phonePlaceholder: 'Enter your phone number',
      email: 'Email',
      emailPlaceholder: 'Enter your email address',
      message: 'Message',
      messagePlaceholder: 'Enter your message here...',
      submit: 'Send Message',
      sending: 'Sending...',
      successMessage:
        'Your message has been sent successfully! I will get back to you soon.',
      errorMessage:
        'There was an error sending your message. Please try again later.'
    }
  },
  footer: {
    about: {
      title: 'About',
      description:
        "I'm Chief of AI at Extreme Group, co-founder of Beyond Co., and helped build Legis and Absens — solutions in software, artificial intelligence, and legal intelligence."
    },
    links: {
      title: 'Quick Links',
      home: 'Home',
      calendar: 'Schedule Meeting',
      contact: 'Contact'
    },
    contact: {
      title: 'Contact'
    },
    rights: 'All rights reserved.',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy'
  },
  cookies: {
    title: 'Cookie Consent',
    message:
      'This website uses cookies to ensure you get the best experience on our website.',
    accept: 'Accept',
    learnMore: 'Learn more',
    settings: 'Cookie Settings'
  },
  terms: {
    title: 'Terms of Service',
    content:
      'These Terms of Service govern your use of the website operated by Victor Aurélio. By accessing or using our website, you agree to be bound by these Terms. We may update these Terms from time to time, and your continued use of the website constitutes acceptance of any changes.',
    back: 'Back to Home',
    sections: {
      use: {
        title: 'Acceptable Use',
        content:
          'You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the website. Prohibited uses include any unlawful activity, distributing malicious code, or attempting to gain unauthorized access to systems or data.'
      },
      content: {
        title: 'Intellectual Property',
        content:
          'All content on this website, including text, graphics, logos, and software, is the property of Victor Aurélio and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.'
      },
      liability: {
        title: 'Limitation of Liability',
        content:
          'The website is provided on an "as is" basis. Victor Aurélio makes no warranties, expressed or implied, and shall not be liable for any damages, including but not limited to, direct, indirect, incidental, or consequential damages arising from the use of the website.'
      },
      changes: {
        title: 'Changes to Terms',
        content:
          'Victor Aurélio reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes indicates your acceptance of the modified Terms.'
      }
    }
  },
  privacy: {
    title: 'Privacy Policy',
    content:
      'This Privacy Policy describes how we collect, use, and share information when you use our website. We collect information to provide, improve, and develop our services. We use cookies to enhance your experience and analyze website traffic. You can manage your cookie preferences through your browser settings.',
    back: 'Back to Home',
    sections: {
      collection: {
        title: 'Information Collection',
        content:
          'We collect information that you provide directly to us, such as when you contact us or fill out forms on our website. We may also automatically collect certain information about your device, including IP address, browser type, and operating system.'
      },
      cookies: {
        title: 'Use of Cookies',
        content:
          'Cookies are small files stored on your device that help us improve website functionality and user experience. We use cookies to remember your preferences, analyze website traffic, and personalize content. You can control cookies through your browser settings.'
      },
      thirdParty: {
        title: 'Third-Party Services',
        content:
          'Our website may use third-party services, such as analytics providers, that may collect information about your use of the website. These third parties have their own privacy policies addressing how they use such information.'
      },
      rights: {
        title: 'Your Rights',
        content:
          'You have the right to access, correct, or delete your personal information that we hold. If you have any questions about how we handle your data or would like to exercise these rights, please contact us.'
      }
    }
  },
  infos: {
    title: 'Chief of AI at Extreme Group',
    subtitle: `${yearsFromFirstDayToNow} years digital solutions expertises`,
    location: 'Recife, Brazil',
    description:
      "I've been Chief of AI at Extreme Group since December 2025, where I lead the group's artificial intelligence strategy. That role is a direct result of the path I built as a co-founder of Beyond Co., where I structured the onboarding and training of our first employees, built the HR function, the culture program, and each team member's individual development strategy — while also being the lead voice on the technical and architectural decisions behind everything the company builds. I led more than 60 people as CTO and COO.<br><br>Beyond was founded to build products, not software-house projects: Legis (today a legal ERP) and Absens both grew out of that philosophy. I was one of Legis's original developers before moving into a strategy and support role for the team that runs it today.<br><br>At Absens, I was the sole developer for a period, building the entire automation layer and the AI model — until we validated the solution with Recife's City Hall: we preserved more than 43,000 appointment slots, cut average wait times by 4 days, with a 96%-accuracy predictive model. The project won Recife's 1st Open Innovation Cycle (among 60+ submissions) and placed 2nd at Connected Smart Cities 2025.<br><br>I'm also a Google-certified Cloud Architect, and my passion for technology began at age 14."
  },
  scheduleMeeting: 'Schedule meeting',
  openSite: 'Open site',
  actions: {
    open: 'open'
  },
  life: {
    sectionTitle: 'Timeline',
    leadershipLabel: 'Executive leadership',
    trajectoryLabel: 'Journey & education'
  },
  skills: {
    sectionTitle: 'Skills and expertises',
    subtitle:
      'Some of the tools I have experience with in terms of Software Engineering'
  },
  projects: {
    sectionTitle: 'Projects from my journey',
    showMore: 'Show more',
    showLess: 'Show less',
    items: [
      {},
      {
        title: 'Absens — reducing no-shows in public healthcare',
        url: 'https://absens.com.br',
        subtitle:
          "AI product built for Recife's City Hall: won the 1st Open Innovation Cycle and preserved 43,000+ appointment slots in the public health system.",
        date: '2021',
        content:
          "<p>Absens was born out of Recife City Hall's 1st Open Innovation Cycle (Emprel + Municipal Health Department), launched in November 2021 to reduce no-shows in public healthcare appointments and exams. I was the solution's sole developer for a period, building the entire automation layer (WhatsApp reminders and rescheduling) and the AI model that calculates each patient's likelihood of attendance.</p><p>During the pilot phase, the solution preserved over 43,000 appointment slots and cut average patient wait time by 4 days, with a 96%-accuracy predictive model. The project won Recife's 1st Open Innovation Cycle (among 60+ submitted solutions) and, more recently, placed 2nd in the Public Sector Solutions category at Connected Smart Cities 2025.</p>"
      },
      {
        title: 'Nutrição Total',
        url: 'http://septomobile.com.br/nutricaototal/',
        subtitle:
          'One of the apps I built as founder and CTO of Septo Mobile — a startup whose apps reached over 4 million downloads combined.',
        img: 'nutricaototal.png',
        date: '',
        content:
          '<p><strong>I was the founder and CTO of Septo Mobile</strong>, a startup where I built several apps that together surpassed 4 million downloads.</p><p>Nutrição Total é um sistema que visa facilitar a vida do discente e do setor de nutrição facilitando o agendamento diário nas refeições via web e mobile. Permite também a agilização na fila, Interação do discente no processo de escolha do cardápio por meio de feedbacks e de um sistema de coleta de dados que permite que o setor nutritivo saiba diretamente do discente suas preferências seus gostos e o que não é bem aceito, diminuindo assim o desperdício de alimentos.</p>'
      },
      {
        title: 'Energia Consumida',
        url: 'http://victoraurelio.com/demonstracao/energiaconsumida',
        subtitle:
          'Projeto construído como trabalho de mestrado do Professor Mestrando Gregor Gama de Carvalho',
        img: 'energiaconsumida.png',
        date: '',
        content:
          '<p>A Medição do Consumo de Energia Elétrica é realizada mensalmente, afim de realizar a tarifação de cada consumidor. Um Sistema Online específico permite ao usuário acompanhar o comportamento da construção da conta de energia, possibilitando a identificação de quais os horários no dia e semana, em que o consumo elétrico é maior ou menor.</p><p>Atualmente existem Medidores Eletrônicos que permitem monitorar, armazenar e controlar os dados de consumo. Nesse trabalho, os dados são coletados e transmitidos por um Microcontrolador. Ele está instalado no principal quadro elétrico que energiza o estabelecimento ou residência, sendo conectados 03 sensores específicos aos principais cabos de alimentação elétrica, coletando em tempo real, os valores de corrente elétrica que passam por esses cabos.</p><p>A inovação deste trabalho é o desenvolvimento de uma Rede Neural Artificial, no Software MATLAB O algoritmo é capaz de prever o consumo mensal de energia, desde que seja informado apenas os 03 valores de corrente elétrica que energizam o estabelecimento. A Rede Neural Artificial é utilizada para a modelagem de problemas não lineares, onde equações não conseguem descrever o comportamento do sistema estudado.</p>'
      },
      {
        title: 'Indica filme',
        url: 'http://filme.thik.co',
        subtitle:
          'Um web site que te recomenda um filme novo a cada clique do mouse',
        img: 'filme.png',
        date: '',
        content:
          'Um web site que te recomenda um filme novo a cada clique do mouse.'
      },
      {
        title: '+Sangue',
        url: 'https://play.google.com/store/apps/details?id=maissangue.ifal.edu.br',
        subtitle:
          'Aplicativo que possibilita agendar doações nos Hemocentros de Alagoas (Hemoal em Maceió e Hemoar Arapiraca)',
        img: 'maissangue.png',
        date: '',
        content:
          'Aplicativo android desenvolvido em linguagem nativa (java) com web service ruby on rails, disponível na Google Play. Através do aplicativo o cidadão pode ser notificado de novas campanhas, campanhas de baixa no estoque de sangue e compartilhar nas mídias sociais. Equipe: Nywton, Ernande e Victor.'
      },
      {
        title: 'Neural Network JS',
        url: 'https://github.com/ovictoraurelio/neuralnetworkjs',
        subtitle:
          'Projeto contruído para simular o método FeedForward de uma rede neural artificial em javascript.',
        img: 'github.png',
        date: '',
        content:
          'Este projeto é open-source e livre atualmente esta disponível no github.'
      },
      {
        title: 'Ouvido Absoluto',
        url: 'https://play.google.com/store/apps/details?id=br.com.septo.ouvidoabsoluto',
        subtitle:
          'Jogo de música voltado para os amantes da música, iniciantes e profissionais.',
        img: 'ouvidoabsoluto.png',
        date: '',
        content:
          'Aplicativo android desenvolvido em html/css com javascript utilizando os frameworks: Bootstrap e Cordova.'
      },
      {
        title: 'Boutique App',
        url: 'http://victoraurelio.com/boutique',
        subtitle:
          'Projeto construido para ajudar a compartilhar e organizar objetos pessoais',
        img: 'boutique.png',
        date: '',
        content:
          '<p>Em breve mais informações estarão disponíveis sobre este projeto, atualmente ele está aguardando definições quanto ao seu modelo.</p>'
      },
      {
        title: 'Boletim Ifal - Paralelo',
        url: 'http://victoraurelio.com/boletim',
        subtitle:
          'Versão não oficial do boletim do IFAL, para melhor visualizar as informações do mesmo',
        img: 'boletim.png',
        date: '',
        content:
          '<p>Website paralelo para visualizar as notas do boletim do IFAL, em breve serão implementados recursos que irão fazer você jamais querer usar o antigo website.</p>'
      },
      {
        title: 'ApiObject',
        url: 'https://github.com/ovictoraurelio/apiObject',
        subtitle: 'A open-source project available on github.',
        img: 'github.png',
        date: '',
        content:
          'A tiny javascript framework. Focused to make more simple work with javascript, json e ajax. I have developed this project before VueJS, Angular and React as we know.'
      },
      {
        title: 'Find my CEP',
        url: 'http://victoraurelio.com/cep',
        subtitle: 'Useful to find your CEP using geolocation.',
        img: 'github.png',
        date: '',
        content:
          'A open-source project available on github. <br> To view source code on github: <a target="_blank" href="https://github.com/ovictoraurelio/my-postal-code">https://github.com/ovictoraurelio/my-postal-code</a>'
      }
    ]
  }
}
