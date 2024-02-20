const firstDayWorkingAsDev = new Date(2012, 3, 1)
const yearsFromFirstDayToNow =
  new Date().getFullYear() - firstDayWorkingAsDev.getFullYear()
export default {
  language: 'language',
  infos: {
    title: 'CTO and Co-founder at Beyond Co',
    subtitle: `${yearsFromFirstDayToNow} years digital solutions expertises`,
    location: 'Recife, Brazil',
    description:
      "I am the CTO and co-founder of Beyond Co., where I lead the development of innovative solutions for clients across various industries. As a Google Cloud certified cloud architect, I have experience in designing and implementing scalable, secure, and efficient architectures using technologies such as Google Cloud Platform, Amazon Web Services, and Microsoft Azure.<br><br>My passion for entrepreneurship began at an early age, and since then, I have worked on projects that aim to bring convenience and efficiency to people's daily lives. As a programmer since the age of 14, I am constantly striving to develop and deliver software and tools aligned with this goal.<br><br>I love challenges! I always seek to be involved in innovative topics related to software and hardware development, especially in real-world problems that can be solved with technology. I believe that technology has the power to transform society and aim to contribute to this transformation. <br><br>In addition to my role as CTO, I am a student of Computer Engineering at UFPE and hold a technical degree in Informatics from IFAL, completed in 2015. I believe in the importance of continuous learning and knowledge updating, which is why I regularly participate in courses, events, and discussion forums in the technology field."
  },
  actions: {
    open: 'open'
  },
  life: {
    sectionTitle: 'Timeline'
  },
  skills: {
    sectionTitle: 'Skills and expertises'
  },
  projects: {
    sectionTitle: 'Recent projects',
    items: [
      {},
      {
        title: 'Nutrição Total',
        url: 'http://septomobile.com.br/nutricaototal/',
        subtitle:
          'Platform developed while I was a partner and developer at startup Septo Mobile.',
        img: 'nutricaototal.png',
        date: '',
        content:
          '<p>Nutrição Total é um sistema que visa facilitar a vida do discente e do setor de nutrição facilitando o agendamento diário nas refeições via web e mobile. Permite também a agilização na fila, Interação do discente no processo de escolha do cardápio por meio de feedbacks e de um sistema de coleta de dados que permite que o setor nutritivo saiba diretamente do discente suas preferências seus gostos e o que não é bem aceito, diminuindo assim o desperdício de alimentos.</p>'
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
