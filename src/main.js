// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret , faCheck , faXmark , faHouse} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret , faCheck , faXmark , faHouse)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
