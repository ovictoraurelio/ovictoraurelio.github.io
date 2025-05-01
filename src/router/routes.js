import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'

export default [
  { path: '/', component: Home },
  { path: '/agenda', component: Calendar },
  { path: '/calendar', component: Calendar },
  { path: '/terms', component: Terms },
  { path: '/privacy', component: Privacy }
]