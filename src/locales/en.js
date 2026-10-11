import ui from './ui-en'

const firstDayWorkingAsDev = new Date(2012, 3, 1)
const yearsFromFirstDayToNow =
  new Date().getFullYear() - firstDayWorkingAsDev.getFullYear()
export default {
  ui,
  language: 'language',
  back: 'Back to Home',
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
        'I am the COO and co-founder of Beyond Co., as well as CSO at Absens and Legis, where I lead the development of innovative solutions in software, artificial intelligence, and legal intelligence.'
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
    title: 'COO at Beyond Co | CSO at Legis and Absens',
    subtitle: `${yearsFromFirstDayToNow} years digital solutions expertises`,
    location: 'Recife, Brazil',
    description:
      'I am the COO and co-founder of Beyond Co., where for over six years I have been developing innovative solutions for clients across diverse sectors. Through the combination of strategic innovation, people management, and technological leadership, my goal is to drive the growth of the people I lead and the evolution of the software we produce, ensuring we always deliver true value.<br><br>Additionally, I serve as CSO at Legis and Absens. At Legis, I have spent the last four years applying my skills to guide the company and ensure sustainable success in developing legal intelligence software. At Absens, we are using Artificial Intelligence to combat absenteeism, helping to reduce waiting lines in the Brazilian public health system (SUS).<br><br>My passion for entrepreneurship and technology began at the age of 14, and since then I have been committed to solving real-world problems through innovation. As a Google Cloud Certified Architect, I specialize in designing and implementing scalable, secure, and efficient cloud infrastructures, using platforms such as Google Cloud Platform, AWS, and Microsoft Azure.<br><br>I love taking on new challenges and am always looking for opportunities to go beyond in software and hardware development. I sincerely believe that technology can transform society, and I aim to contribute to this transformation through innovative and efficient solutions.'
  },
  scheduleMeeting: 'Schedule meeting',
  openSite: 'Open site',
  actions: {
    open: 'open'
  },
  life: {
    sectionTitle: 'Timeline'
  },
  skills: {
    sectionTitle: 'Skills and expertises',
    subtitle:
      'Some of the tools I have experience with in terms of Software Engineering'
  },
  projects: {
    sectionTitle: 'Recent projects (Not anymore)',
    showMore: 'Show more',
    showLess: 'Show less',
    items: [
      {},
      {
        title: 'Nutrição Total',
        url: 'http://septomobile.com.br/nutricaototal/',
        subtitle:
          'A meal scheduling platform built while I was a partner and developer at Septo Mobile.',
        img: 'nutricaototal.png',
        date: '',
        content:
          '<p>A web and mobile platform for scheduling student meals and helping campus nutrition teams manage their daily operations.</p><p>Students can provide feedback on menus and share their preferences. The platform helps the nutrition team make informed decisions and reduce food waste.</p>'
      },
      {
        title: 'Energia Consumida',
        url: 'http://victoraurelio.com/demonstracao/energiaconsumida',
        subtitle:
          'An energy monitoring project developed for Gregor Gama de Carvalho’s master’s research.',
        img: 'energiaconsumida.png',
        date: '',
        content:
          '<p>An online system for monitoring electricity consumption and identifying the times of day and week with the highest demand.</p><p>A microcontroller connected to three sensors collects current readings from the main electrical panel in real time.</p><p>A neural network developed in MATLAB uses these readings to estimate monthly consumption, modelling relationships that conventional equations cannot easily describe.</p>'
      },
      {
        title: 'Indica filme',
        url: 'http://filme.thik.co',
        subtitle: 'A website that recommends a new movie with each click.',
        img: 'filme.png',
        date: '',
        content:
          'A simple experiment in movie discovery: click to get a new recommendation.'
      },
      {
        title: '+Sangue',
        url: 'https://play.google.com/store/apps/details?id=maissangue.ifal.edu.br',
        subtitle:
          'An Android app for scheduling blood donations at blood centres in Alagoas.',
        img: 'maissangue.png',
        date: '',
        content:
          '<p>A native Android application built in Java, with a Ruby on Rails web service. It supports donation appointments at Hemoal in Maceió and Hemoar in Arapiraca.</p><p>Users can receive campaign and blood supply notifications and share them on social media. Developed with Nywton and Ernande.</p>'
      },
      {
        title: 'Neural Network JS',
        url: 'https://github.com/ovictoraurelio/neuralnetworkjs',
        subtitle:
          'An open source JavaScript experiment that simulates a neural network’s feedforward process.',
        img: 'github.png',
        date: '',
        content:
          'An open source implementation for exploring how information moves through a neural network, available on GitHub.'
      },
      {
        title: 'Ouvido Absoluto',
        url: 'https://play.google.com/store/apps/details?id=br.com.septo.ouvidoabsoluto',
        subtitle:
          'A music game for enthusiasts, beginners and professional musicians.',
        img: 'ouvidoabsoluto.png',
        date: '',
        content:
          'An Android application built with HTML, CSS and JavaScript, using Bootstrap and Cordova.'
      },
      {
        title: 'Boutique App',
        url: 'http://victoraurelio.com/boutique',
        subtitle:
          'A project exploring how to share and organise personal belongings.',
        img: 'boutique.png',
        date: '',
        content:
          'An early product experiment in sharing and organising personal items. The project was awaiting decisions on its business model.'
      },
      {
        title: 'Boletim Ifal - Paralelo',
        url: 'http://victoraurelio.com/boletim',
        subtitle:
          'An unofficial interface for reading IFAL student grades more clearly.',
        img: 'boletim.png',
        date: '',
        content:
          'An alternative website for viewing IFAL student grades, designed to make the information easier to read.'
      },
      {
        title: 'ApiObject',
        url: 'https://github.com/ovictoraurelio/apiObject',
        subtitle:
          'A small open source JavaScript framework for working with objects, JSON and Ajax.',
        img: 'github.png',
        date: '',
        content:
          'A lightweight JavaScript framework created to simplify working with JavaScript objects, JSON and Ajax, before today’s major frontend frameworks became established.'
      },
      {
        title: 'Find my CEP',
        url: 'http://victoraurelio.com/cep',
        subtitle:
          'A tool for finding a Brazilian postal code using geolocation.',
        img: 'github.png',
        date: '',
        content:
          '<p>An open source experiment in finding a Brazilian postal code from a location.</p><p><a href="https://github.com/ovictoraurelio/my-postal-code" target="_blank" rel="noopener noreferrer">View the source on GitHub</a></p>'
      }
    ]
  }
}
