import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'

export default [
  { path: '/', component: Home },
  { path: '/agenda', component: Calendar },
  { path: '/calendar', component: Calendar }
]