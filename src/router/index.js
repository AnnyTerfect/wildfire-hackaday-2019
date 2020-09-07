import Vue from 'vue'
import Router from 'vue-router'
import Society from '@/components/Society/Society'
import Education from '@/components/Education/Education'
import Life from '@/components/Life/Life'
import lifeMenu from '@/components/Life/Menu'
import lifeMoney from '@/components/Life/Money'
import lifeReverse from '@/components/Life/Reverse'
import lifeGoout from '@/components/Life/Goout'
import Interaction from '@/components/Interaction/Interaction'
import InterAgriculture from '@/components/Interaction/Agriculture'
import InterJob from '@/components/Interaction/Job'
import Write from '@/components/Write'
import Notifications from '@/components/Notifications'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Society/',
      name: 'Society',
      component: Society
    },
    {
    	path: '/Education/',
    	name: 'Education',
    	component: Education
    },
    {
    	path: '/Life/',
    	name: 'Life',
    	component: Life
    }, 
    {
    	path: '/Life/Menu',
    	name: 'lifeMenu',
    	component: lifeMenu
    },
    {
        path: '/Life/Money',
        name: 'lifeMoney',
        component: lifeMoney
    },
    {
        path: '/Life/Reverse',
        name: 'lifeReverse',
        component: lifeReverse
    },
    {
        path: '/Life/Goout',
        name: 'lifeGoout',
        component: lifeGoout
    },
    {
    	path: '/Interaction/',
    	name: 'Interaction',
    	component: Interaction
    },
    {
        path: '/Interaction/Agriculture',
        name: 'InterAgriculture',
        component: InterAgriculture
    },
    {
        path: '/Interaction/Job',
        name: 'InterJob',
        component: InterJob
    },
    {
        path: '/Write',
        name: 'Write',
        component: Write
    },
    {
        path: '/Notifications',
        name: 'Notifications',
        component: Notifications
    }
  ]
})
