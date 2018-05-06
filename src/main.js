// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '../assets/scss/globals/index.scss' // Customize UI <---
import Vue from 'vue'

import App from './App'
import router from './router'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import store from './VuexStore'

Vue.use(VueMomentJS, moment)
fontawesome.library.add(faLinkedin, faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const challengeImages = require.context('./challenges', true, /\/(.*)\/.*\.png$/)
const challenges = []
challengeImages.keys().forEach((e) => challenges.push(e.split('/')[1]))

Vue.prototype.$challenges = challenges

Vue.prototype.$contactDetails = {
  fullName: 'Chris (C.) Overgaauw',
  name: 'Chris',
  surname: 'Overgaauw',
  dob: '1991-05-08',
  linkedin: 'https://www.linkedin.com/in/chrisovergaauw',
  github: 'https://github.com/chrisovergaauw',
  instagram: 'https://www.instagram.com/chrisovergaauw/'
}

Vue.prototype.$myP5BoilerPlate = require('../js/myP5BoilerPlate')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
