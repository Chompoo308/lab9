<template>
  <div class="py-4 setlocation">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <h1><font-awesome-icon icon="fa-solid fa-unlock" /> LOGIN</h1>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="email"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        v-model="pwd"
      ></v-text-field>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login()">
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          @click="googlelogin()"
        >
          Google Login <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          @click="gotoRegister()"
        >
          Sing up <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { ref } from 'vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref()
const pwd = ref()
const provider = new GoogleAuthProvider()

function login() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('User : ' + user)
      router.push('/index')
      Swal.fire('Welcome', 'You clicked the button!', 'success')

      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode + errorMessage)
      if (email.value == 'admin@gmail.com' && pwd.value == 'admin') {
        router.push('/admin')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage
        })
      }
    })
}

function gotoRegister() {
  router.push('/register')
}

function googlelogin() {
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log('Token : ' + token)
      console.log('User : ' + user)
      router.push('/index')
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
      console.log('Error : ' + errorCode + errorMessage)
      console.log('email :' + email + credential)
    })
}
</script>

<style scoped>
.setlocation {
  margin: 15%;
}
</style>
