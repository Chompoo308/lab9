<template>
  <div class="py-4 setlocation">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <h1><font-awesome-icon icon="fa-solid fa-unlock" /> SING UP</h1>
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

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="register()">
        Sing up
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'
const email = ref()
const pwd = ref()

function register() {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, pwd.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('User : ' + user)
      router.push('/')
      Swal.fire('Good job!', 'You clicked the button!', 'success')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode + errorMessage)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage
      })
      // ..
    })
}
</script>

<style></style>
