import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: ['/home']
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
    alias: ['/agenda', '/calendario']
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms,
    alias: ['/termos']
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy,
    alias: ['/privacidade']
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    alias: ['/contato', '/mensagem']
  }
]
