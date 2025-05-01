const firstDayWorkingAsDev = new Date(2012, 3, 1)
const yearsFromFirstDayToNow =
  new Date().getFullYear() - firstDayWorkingAsDev.getFullYear()

export default {
  language: 'idioma',
  footer: {
    about: {
      title: 'Sobre',
      description: 'Sou COO e co-fundador da Beyond Co., empresa na qual tenho liderado o desenvolvimento de soluções inovadoras para clientes em diversos segmentos de mercado.'
    },
    links: {
      title: 'Links Rápidos',
      home: 'Início',
      calendar: 'Agendar Reunião',
      contact: 'Contato'
    },
    contact: {
      title: 'Contato'
    },
    rights: 'Todos os direitos reservados.',
    terms: 'Termos de Serviço',
    privacy: 'Política de Privacidade'
  },
  cookies: {
    message: 'Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site.',
    accept: 'Aceitar',
    learnMore: 'Saiba mais',
    settings: 'Configurações de Cookies'
  },
  terms: {
    title: 'Termos de Serviço',
    content: 'Estes Termos de Serviço regem o uso do site operado por Victor Aurélio. Ao acessar ou usar nosso site, você concorda em estar vinculado a estes Termos. Podemos atualizar estes Termos de tempos em tempos, e seu uso contínuo do site constitui aceitação de quaisquer alterações.',
    back: 'Voltar para Início',
    sections: {
      use: {
        title: 'Uso Aceitável',
        content: 'Você concorda em usar este site apenas para fins legais e de uma maneira que não infrinja os direitos de outros ou restrinja seu uso do site. Usos proibidos incluem qualquer atividade ilegal, distribuição de código malicioso ou tentativa de obter acesso não autorizado a sistemas ou dados.'
      },
      content: {
        title: 'Propriedade Intelectual',
        content: 'Todo o conteúdo neste site, incluindo texto, gráficos, logotipos e software, é propriedade de Victor Aurélio e está protegido por direitos autorais e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou criar trabalhos derivados sem permissão explícita.'
      },
      liability: {
        title: 'Limitação de Responsabilidade',
        content: 'O site é fornecido "como está". Victor Aurélio não oferece garantias, expressas ou implícitas, e não será responsável por quaisquer danos, incluindo, mas não se limitando a, danos diretos, indiretos, incidentais ou consequentes decorrentes do uso do site.'
      },
      changes: {
        title: 'Alterações nos Termos',
        content: 'Victor Aurélio reserva-se o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. Seu uso contínuo do site após quaisquer alterações indica sua aceitação dos Termos modificados.'
      }
    }
  },
  privacy: {
    title: 'Política de Privacidade',
    content: 'Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos informações quando você usa nosso site. Coletamos informações para fornecer, melhorar e desenvolver nossos serviços. Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.',
    back: 'Voltar para Início',
    sections: {
      collection: {
        title: 'Coleta de Informações',
        content: 'Coletamos informações que você fornece diretamente a nós, como quando você nos contata ou preenche formulários em nosso site. Também podemos coletar automaticamente certas informações sobre seu dispositivo, incluindo endereço IP, tipo de navegador e sistema operacional.'
      },
      cookies: {
        title: 'Uso de Cookies',
        content: 'Cookies são pequenos arquivos armazenados em seu dispositivo que nos ajudam a melhorar a funcionalidade do site e a experiência do usuário. Usamos cookies para lembrar suas preferências, analisar o tráfego do site e personalizar conteúdo. Você pode controlar os cookies através das configurações do seu navegador.'
      },
      thirdParty: {
        title: 'Serviços de Terceiros',
        content: 'Nosso site pode usar serviços de terceiros, como provedores de análise, que podem coletar informações sobre seu uso do site. Esses terceiros têm suas próprias políticas de privacidade que abordam como eles usam essas informações.'
      },
      rights: {
        title: 'Seus Direitos',
        content: 'Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos. Se você tiver alguma dúvida sobre como lidamos com seus dados ou gostaria de exercer esses direitos, entre em contato conosco.'
      }
    }
  },
  infos: {
    title: 'COO e Co-fundador da Beyond Co',
    subtitle: `${yearsFromFirstDayToNow} anos de experiência em soluções digitais`,
    location: 'Recife, Brasil',
    description: `Sou COO e co-fundador da Beyond Co., empresa na qual tenho liderado o desenvolvimento de soluções inovadoras para clientes em diversos segmentos de mercado. Como arquiteto de nuvem certificado pelo Google, tenho experiência em projetar e implementar arquiteturas escaláveis, seguras e eficientes, utilizando tecnologias como Google Cloud Platform, Amazon Web Services e Microsoft Azure.<br><br>Minha paixão por empreendedorismo começou desde cedo, e desde então tenho trabalhado em projetos que buscam trazer comodidade e eficiência para o dia a dia das pessoas. Como programador desde os 14 anos, busco constantemente desenvolver e entregar software e ferramentas alinhados com essa proposta.<br><br>Adoro desafios! Sempre busco estar envolvido em tópicos inovadores de desenvolvimento de software e hardware, principalmente em problemas do mundo real que podem ser resolvidos com tecnologia. Acredito que a tecnologia tem o poder de transformar a sociedade e tenho como objetivo contribuir para essa transformação.<br><br>Além de minha atuação como COO, sou estudante de Engenharia da Computação na UFPE e possuo formação técnica em Informática pelo IFAL, concluída em 2015. Acredito na importância de estar sempre aprendendo e atualizando conhecimentos, e por isso busco participar constantemente de cursos, eventos e fóruns de discussão na área de tecnologia.`
  },
  scheduleMeeting: 'Agendar uma reunião',
  actions: {
    open: 'abrir'
  },
  life: {
    sectionTitle: 'Em minha vida'
  },
  skills: {
    sectionTitle: 'Habilidades e conhecimentos'
  },
  projects: {
    sectionTitle: 'Projetos recentes (Não mais)',
    showMore: 'Ver mais',
    showLess: 'Ver menos',
    items: [
      {},
      {
        title: 'Nutrição Total',
        url: 'http://septomobile.com.br/nutricaototal/',
        subtitle:
          'Plataforma desenvolvida enquanto era sócio e desenvolvidor na startup Septo Mobile.',
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
        subtitle:
          'Um miniframework javascript para facilitar o trabalho com objetos javascript, json e ajax',
        img: 'github.png',
        date: '',
        content:
          'Este projeto é open-source e livre atualmente esta disponível no github.'
      },
      {
        title: 'Encontrar CEP',
        url: 'http://victoraurelio.com/cep',
        subtitle:
          'Este projeto é útil para encontrar um CEP usando geolocalização.',
        img: 'github.png',
        date: '',
        content:
          'Este projeto é open-source e livre atualmente esta disponível no github. <br> Abrir projeto no Github: <a href="https://github.com/ovictoraurelio/my-postal-code">https://github.com/ovictoraurelio/my-postal-code</a>'
      }
    ]
  }
}
