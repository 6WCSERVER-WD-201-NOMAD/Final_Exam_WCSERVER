import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import services from '@/components/services'
import contacts from '@/components/contacts'
import about from '@/components/about'
import appointment from '@/components/appointment'
import list from '@/components/ListAppointment'
import edit from '@/components/UpdateAppointment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: contacts
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: appointment
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ]
  
})


