(function(e){function t(t){for(var a,s,n=t[0],l=t[1],c=t[2],u=0,m=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,n=1;n<o.length;n++){var l=o[n];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},i={index:0},r=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var d=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3f81":function(e,t,o){"use strict";o("bfea")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-content",[o("router-view")],1),o("v-footer",{attrs:{padless:""}},[o("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[o("v-card",{staticClass:"ma-0 pa-0 blue-grey darken-4 white--text text-center",attrs:{flat:"",tile:""}},[o("v-card-text",e._l(e.medias,(function(t){return o("v-btn",{key:t.link,staticClass:"mx-4 white--text",attrs:{icon:""},on:{click:function(o){return e.openUrl(t)}}},[o("v-icon",{attrs:{size:"24px"}},[e._v(e._s(t.icon)+" ")])],1)})),1),o("v-card-text",{staticClass:"white--text pt-0"},[e._v("Site currículo minimalista desenvolvido no tempo livre.")]),o("v-divider"),o("v-card-text",{staticClass:"white--text"},[e._v(e._s((new Date).getFullYear())+" — "),o("strong",[e._v("Victor Aurélio")])])],1)],1)],1)],1)},r=[],s=(o("9911"),{name:"App",components:{},methods:{openUrl:function(e){window.open(e.link,"_blank")}},data:function(){return{medias:[{icon:"mdi-github",link:"https://github.com/ovictoraurelio"},{icon:"mdi-twitter",link:"https://twitter.com/ovictoraurelio"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/ovictoraurelio/"},{icon:"mdi-facebook",link:"https://facebook.com/ovictoraurelio"},{icon:"mdi-instagram",link:"https://instagram.com/ovictoraurelio"}]}}}),n=s,l=(o("7d86"),o("2877")),c=Object(l["a"])(n,i,r,!1,null,"4b6c37c6",null),d=c.exports,u=o("8c4f"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:"","fill-height":""}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"8",sm:"10",xs:"12"}},[o("Infos")],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"8",sm:"10",xs:"12"}},[o("History")],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"8",sm:"10",xs:"12"}},[o("Courses")],1)],1)],1)},p=[],g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-row",{attrs:{justify:"start",align:"center"}},[o("v-col",{attrs:{cols:"auto"}},[o("v-avatar",{attrs:{size:e.$isMobile()?80:120}},[o("v-img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/ovictoraurelio.appspot.com/o/victor.jpeg?alt=media&token=237cc365-5fda-4c21-964f-83d24e01bb8f",alt:"Victor Aurélio"}})],1)],1),o("v-col",{attrs:{cols:"auto"}},[o("v-card-text",{staticClass:"display-1 font-weight-bold"},[e._v("Victor Aurélio")]),o("v-card-text",{staticClass:"subheading pt-0 pb-0 font-weight-medium"},[e._v("Desenvolvedor e Empreendedor")]),o("v-card-text",{staticClass:"caption pt-2"},[e._v("Recife, Brasil")])],1)],1),o("v-row",[o("v-col",{staticClass:"body-1 text-justify"},[e._v("CTO and Co-founder at Beyond Cloud. I'm a Cloud Developer and Google Cloud Architect. Entrepreneur since kid, I love work with things that make people's life easy, so I had become a programmer (since I have 14y) to develop, build and deploy software or tools with this purpose. So I love challenges! Works on a innovative or hard topic of software or hardware development and mainly the challenges of real world that we can solve with technology. - Undergraduate Computer Engineering at Federal University Of Pernambuco. - Former Computer Technician by Federal Institute of Alagoas, 2015. ")])],1)],1)},v=[],f={name:"Home"},b=f,h=(o("3f81"),Object(l["a"])(b,g,v,!1,null,"d7419f82",null)),y=h.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"pa-8",attrs:{flat:""}},[o("v-card-title",{staticClass:"display-2 font-weight-thin"},[e._v("in my life")]),o("v-card-text",{staticClass:"mt-8"},[o("v-timeline",{attrs:{"align-top":"",dense:""}},e._l(e.histories,(function(t,a){return o("v-timeline-item",{key:a,attrs:{color:"grey","fill-dot":""}},[o("v-row",{staticClass:"pt-1"},[o("v-col",{attrs:{cols:"3"}},[o("div",{staticClass:"caption"},[e._v(e._s(t.date))])]),o("v-col",[o("strong",[e._v(e._s(t.locate.name))]),o("div",{staticClass:"text-caption"},[e._v(e._s(t.office))])])],1)],1)})),1)],1)],1)},x=[],C={history:[{locate:{name:"Beyond Cloud",link:"http://quoti.com.br"},color:"bg-yellow-olsen",date:"Ago de 2018 - atualmente",img:"globe",office:"CTO & Co-fundador"},{locate:{name:"Plataforma Quoti",link:"http://quoti.com.br"},color:"bg-yellow-olsen",date:"Outubro 2017 - atualmente",img:"globe",office:"Desenvolvedor web full-stack"},{locate:{name:"Viitra Inovações",link:"http://viitra.com"},color:"bg-yellow-olsen",date:"2 de Abril à Outubro de 2017 ",img:"globe",office:"Desenvolvedor web full-stack"},{locate:{name:"Monitoria | UFPE"},color:"bg-yellow-olsen",date:"2017.1",img:"globe",office:"Monitor das disciplinas: Introdução à programação e Sistemas Digitais"},{locate:{name:"UFPE - Universidade Federal de Pernanbuco",link:"ufpe.br"},color:"bg-yellow-olsen",date:"7 de Março de 2016 - atualmente",img:"book",office:"Estudante de engenharia da computação"},{locate:{name:"Freelancer",link:"http://victoraurelio.com"},color:"bg-yellow-olsen",date:"1 de Setembro de 2015 até Julho de 2018",img:"globe",office:"Desenvolvedor web e android"},{locate:{name:"Septo Mobile",link:"http://septomobile.com.br"},color:"bg-light-grey",date:"27/12/2013 - 30/12/2015",img:"building",office:"Desenvolvedor"},{locate:{name:"Monitoria de informática",link:"http://informatica.ifal.edu.br"},color:"bg-light-grey",img:"desktop",date:"04/03/2014 - 13/12/2014",office:"Monitor de algoritimos e estruturas de dados"},{locate:{name:"+Sangue",link:"https://play.google.com/store/apps/details?id=maissangue.ifal.edu.br"},color:"bg-light-grey",img:"search-plus",date:"04/04/2013 - 13/04/2015",office:"Colaborador",more:"Aplicativo android desenvolvido em linguagem nativa (java) com web service ruby on rails, disponível na google play em breve. Equipe: Nywton, Ernande e Victor."},{locate:{name:"Bessas Techonology",link:"not_found"},img:"building",color:"bg-light-grey",date:"Janeiro a Dezembro de 2013",office:"Desenvolvedor web",more:""},{locate:{name:"IFAL",link:"http://ifal.edu.br"},color:"bg-light-grey",img:"graduation-cap",date:"06/02/2012 - 21/01/2016",office:"Estudante do curso técnico integrado de informática",more:"Estudante de informática no Instituto Federal de Alagoas, desde 2012. Onde teve contanto com o universo do desenvolvimento de software, desde então, trabalhando em sistemas e aplicativos, para diferentes plataformas."}],recents:[{title:"Nutrição Total",url:"http://septomobile.com.br/nutricaototal/",subtitle:"Projeto elaborado enquanto trabalhava no grupo Septo Mobile.",img:"nutricaototal.png",date:"",content:"<p>Nutrição Total é um sistema que visa facilitar a vida do discente e do setor de nutrição facilitando o agendamento diário nas refeições via web e mobile. Permite também a agilização na fila, Interação do discente no processo de escolha do cardápio por meio de feedbacks e de um sistema de coleta de dados que permite que o setor nutritivo saiba diretamente do discente suas preferências seus gostos e o que não é bem aceito, diminuindo assim o desperdício de alimentos.</p>"},{title:"Energia Consumida",url:"http://victoraurelio.com/demonstracao/energiaconsumida",subtitle:"Projeto construído como trabalho de mestrado do Professor Mestrando Gregor Gama de Carvalho",img:"energiaconsumida.png",date:"",content:"<p>A Medição do Consumo de Energia Elétrica é realizada mensalmente, afim de realizar a tarifação de cada consumidor. Um Sistema Online específico permite ao usuário acompanhar o comportamento da construção da conta de energia, possibilitando a identificação de quais os horários no dia e semana, em que o consumo elétrico é maior ou menor.</p><p>Atualmente existem Medidores Eletrônicos que permitem monitorar, armazenar e controlar os dados de consumo. Nesse trabalho, os dados são coletados e transmitidos por um Microcontrolador. Ele está instalado no principal quadro elétrico que energiza o estabelecimento ou residência, sendo conectados 03 sensores específicos aos principais cabos de alimentação elétrica, coletando em tempo real, os valores de corrente elétrica que passam por esses cabos.</p><p>A inovação deste trabalho é o desenvolvimento de uma Rede Neural Artificial, no Software MATLAB O algoritmo é capaz de prever o consumo mensal de energia, desde que seja informado apenas os 03 valores de corrente elétrica que energizam o estabelecimento. A Rede Neural Artificial é utilizada para a modelagem de problemas não lineares, onde equações não conseguem descrever o comportamento do sistema estudado.</p>"},{title:"Indica filme",url:"http://filme.thik.co",subtitle:"Um web site que te recomenda um filme novo a cada clique do mouse",img:"filme.png",date:"",content:"Um web site que te recomenda um filme novo a cada clique do mouse."},{title:"+Sangue",url:"https://play.google.com/store/apps/details?id=maissangue.ifal.edu.br",subtitle:"Aplicativo que possibilita agendar doações nos Hemocentros de Alagoas (Hemoal em Maceió e Hemoar Arapiraca) através do aplicativo, ser notificado de novas campanhas, campanhas de baixa no estoque de sangue e compartilhar nas mídias sociais.",img:"maissangue.png",date:"",content:"Aplicativo android desenvolvido em linguagem nativa (java) com web service ruby on rails, disponível na google play. Equipe: Nywton, Ernande e Victor."},{title:"Neural Network JS",url:"https://github.com/ovictoraurelio/neuralnetworkjs",subtitle:"Projeto contruído para simular o método FeedForward de uma rede neural artificial em javascript.",img:"github.png",date:"",content:"Este projeto é open-source e livre atualmente esta disponível no github."},{title:"Ouvido Absoluto",url:"https://play.google.com/store/apps/details?id=br.com.septo.ouvidoabsoluto",subtitle:"Jogo de música voltado para os amantes da música, iniciantes e profissionais.",img:"ouvidoabsoluto.png",date:"",content:"Aplicativo android desenvolvido em html/css com javascript utilizando os frameworks: Bootstrap e Cordova."},{title:"Boutique App",url:"http://victoraurelio.com/boutique",subtitle:"Projeto construido para ajudar a compartilhar e organizar objetos pessoais",img:"boutique.png",date:"",content:"<p>Em breve mais informações estarão disponíveis sobre este projeto, atualmente ele está aguardando definições quanto ao seu modelo.</p>"},{title:"Boletim Ifal Unnoficial",url:"http://victoraurelio.com/boletim",subtitle:"Versão não oficial do boletim do IFAL, para melhor visualizar as informações do mesmo",img:"boletim.png",date:"",content:"<p>Website paralelo para visualizar as notas do boletim do IFAL, em breve serão implementados recursos que irão fazer você jamais querer usar o antigo website.</p>"},{title:"ApiObject",url:"https://github.com/ovictoraurelio/apiObject",subtitle:"Um miniframework javascript para facilitar o trabalho com objetos javascript, json e ajax",img:"github.png",date:"",content:"Este projeto é open-source e livre atualmente esta disponível no github."},{title:"Encontrar CEP",url:"http://victoraurelio.com/cep",subtitle:"Este projeto é útil para encontrar um CEP usando geolocalização.",img:"github.png",date:"",content:'Este projeto é open-source e livre atualmente esta disponível no github. <br> Abrir projeto no Github: <a href="https://github.com/ovictoraurelio/my-postal-code">https://github.com/ovictoraurelio/my-postal-code</a>'}]},k={data:function(){return{histories:C.history}},created:function(){console.log({history:history})}},j=k,_=(o("7ee4"),Object(l["a"])(j,w,x,!1,null,null,null)),S=_.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"pa-0",attrs:{flat:""}},[o("v-card-title",{staticClass:"display-2 font-weight-thin"},[e._v("skills and expertises")]),o("v-card-text",{staticClass:"mt-8 pa-0"},e._l(e.groups,(function(t,a){return o("v-row",{staticClass:"no-gutters",attrs:{align:"start",justify:"start"}},[o("v-col",{staticClass:"mt-8 no-gutters",attrs:{cols:"12"}},[o("v-row",{staticClass:"no-gutters title font-weight-thin"},[e._v(e._s(t[0].type)+"s")])],1),o("v-col",{staticClass:"no-gutters pa-0",attrs:{cols:"12"}},[o("v-row",{staticClass:"mt-0",attrs:{justify:"center"}},e._l(t,(function(t,a){return o("v-col",{key:a,attrs:{cols:"auto",align:"center"}},[o("v-card",{staticClass:"text-center",attrs:{width:"400",height:"250",outlined:""}},[o("v-row",{staticClass:"mt-8",attrs:{"no-gutters":""}},[o("v-col",[o("iconify",{staticStyle:{"font-size":"50px"},attrs:{icon:t.icon}})],1)],1),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("div",{staticClass:"headline"},[e._v(e._s(t.text))])])],1),o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("div",{staticClass:"overline"},[e._v(e._s(t.type))])])],1)],1)],1)})),1)],1)],1)})),1)],1)},q=[],F=o("2ef0"),E=o.n(F),O={data:function(){return{groups:[],courses:[{icon:"logos-google-cloud",type:"Cloud Service",text:"Google Cloud"},{icon:"vscode-icons:file-type-devcontainer",type:"Cloud Service",text:"Container"},{icon:"carbon:load-balancer-local",type:"Cloud Service",text:"Load Balancing"},{icon:"logos-kubernetes",type:"Cloud Service",text:"Kubernetes"},{icon:"logos-google-cloud",type:"Cloud Service",text:"Compute Engine & EC2"},{icon:"logos-google-cloud",type:"Cloud Service",text:"Cloud SQL & RDS"},{icon:"logos-google-cloud-functions",type:"Cloud Service",text:"Cloud Functions & Lambda"},{icon:"logos-google-cloud-run",type:"Cloud Service",text:"Cloud Run"},{icon:"logos-firebase",type:"Cloud Service",text:"Firebase Hosting"},{icon:"logos-firebase",type:"Cloud Service",text:"Firebase Firestore"},{icon:"logos-firebase",type:"Cloud Service",text:"Firebase Extensions"},{icon:"mdi-network",type:"Cloud Service",text:"Network & Firewall"},{icon:"logos-c",type:"Language",text:"Linguagem C"},{icon:"logos-java",type:"Language",text:"Java"},{icon:"logos-kotlin",type:"Language",text:"Kotlin Android"},{icon:"logos-c-plusplus",type:"Language",text:"C++"},{icon:"file-icons:assembly-generic",type:"Language",text:"Assembly Mips"},{icon:"file-icons:assembly-generic",type:"Language",text:"Assembly x86"},{icon:"logos-javascript",type:"Language",text:"Javascript"},{icon:"logos-webassembly",type:"Language",text:"WebAssembly"},{icon:"logos-php",type:"Language",text:"Php"},{icon:"logos-sass",type:"Language",text:"Sass"},{icon:"logos-laravel",type:"Framework",text:"Laravel"},{icon:"logos-nodejs",type:"Framework",text:"Express.JS"},{icon:"logos-sequelize",type:"Framework",text:"Sequelize"},{icon:"logos-firebase",type:"Framework",text:"Firebase"},{icon:"logos-docker",type:"Framework",text:"Docker"},{icon:"logos-mysql",type:"Database",text:"My SQL"},{icon:"logos-postgresql",type:"Database",text:"PostgreSQL"},{icon:"logos-mariadb",type:"Database",text:"MariaDB"},{icon:"logos-firebase",type:"Database",text:"Firestore"},{icon:"logos-mongodb",type:"Database",text:"Mongo DB"},{icon:"vscode-icons:file-type-sql",type:"Database",text:"SQL Lite"}]}},created:function(){this.groups=E.a.groupBy(this.courses,"type"),console.log(this.groups)}},L=O,M=Object(l["a"])(L,A,q,!1,null,null,null),P=M.exports,D={name:"Home",components:{Infos:y,History:S,Courses:P}},z=D,I=Object(l["a"])(z,m,p,!1,null,null,null),B=I.exports;a["default"].use(u["a"]);var U=[{path:"/",name:"Home",component:B}],N=new u["a"]({routes:U}),T=N,H=o("2f62");a["default"].use(H["a"]);var J=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=o("ce5b"),V=o.n($);o("bf40");a["default"].use(V.a);var G=new V.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),Q=(o("d5e8"),o("5363"),o("5ea9"));a["default"].config.productionTip=!1,a["default"].component("iconify",Q["a"]),a["default"].prototype.$isMobile=function(){return this.$vuetify.breakpoint.smAndDown},new a["default"]({router:T,store:J,vuetify:G,render:function(e){return e(d)}}).$mount("#app")},6446:function(e,t,o){},"7d86":function(e,t,o){"use strict";o("8d88")},"7ee4":function(e,t,o){"use strict";o("6446")},"8d88":function(e,t,o){},bfea:function(e,t,o){}});
//# sourceMappingURL=index.1662e623.js.map