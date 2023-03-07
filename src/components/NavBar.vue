<template>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          aria-hidden="true"
          class="me-2"
          viewBox="0 0 24 24"
        >
          <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
          ></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
        <strong>AFTER LIFE REVIEW</strong
        ><v-tabs fixed-tabs height="50px">
          <router-link to="/"><v-tab> หน้าแรก </v-tab></router-link>
        </v-tabs>
      </a>

      <router-link to="/"><v-btn> LOGOUT </v-btn></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  mounted() {
    if (localStorage.activeUser) {
      let activeUser = localStorage.activeUser
      this.user = JSON.parse(activeUser)
    }
  }
}
</script>

<style scoped>
.right {
  padding-right: 0px;
}

* {
  color: aliceblue;
}
</style>
