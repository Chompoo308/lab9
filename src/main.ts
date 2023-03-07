import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add some free styles */
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import {  faFire } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import {  faPen } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faCalendarDays,faFire,faHeart,faUnlock,faPen)

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
initializeApp(firebaseConfig);
const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);


const vuetify = createVuetify({
  
  components,
  directives,
  
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

if (localStorage.user === undefined) {
  let users = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin'
    },
  ];
  localStorage.setItem('users',JSON.stringify(users))
}
