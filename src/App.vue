<template>
  <NavBar />
  <!-- ------------------- -->
  <router-view />
  <!-- ---FOOTER--- -->
  <footer class="footer py-3 bg-light set-hight set-footer">
    <div class="container">
      <span class="text-muted">AFTER LIFE COMIC</span>
    </div>
  </footer>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
.set-hight {
  margin-top: 100px;
}
.set-footer {
  bottom: 0;
  width: 100%;
  margin-top: 50px;
}
</style>
