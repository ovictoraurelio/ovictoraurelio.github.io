import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import Contact from '../views/Contact.vue'

export default [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/agenda', component: Calendar },
  { path: '/calendar', component: Calendar },
  { path: '/calendario', component: Calendar },
  { path: '/terms', component: Terms },
  { path: '/termos', component: Terms },
  { path: '/privacy', component: Privacy },
  { path: '/privacidade', component: Privacy },
  { path: '/contact', component: Contact },
  { path: '/contato', component: Contact },
  { path: '/mensagem', component: Contact }
]
