<template>
  <div>
    <IndexView :massage="title"></IndexView>
  </div>
</template>

<script>
import IndexView from './IndexView.vue'

export default {
  components: {
    IndexView
  },
  data() {
    return {
      title: anime.title
    }
  }
}
</script>

<style></style>
