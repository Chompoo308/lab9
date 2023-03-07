<template>
  <v-carousel cycle height="500" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img :src="colors[i]" height="100%" />
      <div class="d-flex fill-height justify-center align-center">
        <div class="text-h2">{{ slide }} Slide</div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'https://img.4gamers.com.tw/ckfinder-th/image2/auto/2021-10/roblox-211001-143158.jpg?versionId=gAUtSftpwVK1RfDh5I3l8rcn0zUzDpy1',
        'https://s.isanook.com/ga/0/ud/190/953283/02.jpg',
        'https://cdn.tigthai.com/imguploads/202001/10/0086580001578652224536_Mobile_This_Week_100120_main.jpg'
      ],
      slides: ['First', 'Second', 'Third']
    }
  }
}
</script>

<style></style>
