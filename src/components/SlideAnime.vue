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
        'https://webtoons-static.pstatic.net/image/pc/home/og_th.jpg?dt=2021111201',
        'https://www.thumbsup.in.th/wp-content/uploads/2019/11/76990132_2399434220167717_3765209975123607552_n-1024x683.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kmxX5lwvAkelXvsiSYtx76OTCEB4oS8OITs-W3P9ib0X3eZyGpatGpUtH1MvvbCENHU&usqp=CAU'
      ],
      slides: ['First', 'Second', 'Third']
    }
  }
}
</script>

<style></style>
