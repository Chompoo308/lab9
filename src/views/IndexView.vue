<template>
  <SlideAnime />
  <h1 class="set-location">REVIEW</h1>
  <div v-for="(game, index) in allgameData" :key="index">
    <div class="container">
      <div class="flex-items"></div>
      <div class="flex-items set-location">
        <v-card class="mx-auto set-location" color="purple" elevation="20" max-width="750">
          <div class="d-flex justify-between">
            <v-card-title class="flex-grow-1 flex-column align-start">
              <div class="text-h5">{{ game.data.gameTitle }}</div>
              <div class="text-h6 font-weight-thin"></div>

              <div class="text-h6 font-weight-thin">
                วันวางจำหน่าย : {{ game.data.gameReleseDate }}
              </div>
              <div class="text-h7 font-weight-thin">{{ game.data.gameGenre }}</div>
              <div class="text-h7 font-weight-thin">{{ game.data.gamePlaform }}</div>
            </v-card-title>

            <v-img
              contain
              height="125px"
              :src="game.data.gameImage"
              style="flex-basis: 125px"
              class="flex-grow-0"
            ></v-img>
          </div>

          <v-divider></v-divider>

          <v-card-actions class="pa-4">
            Rate this game

            <v-spacer></v-spacer>

            <span class="text-grey-lighten-2 text-caption me-2">
              {{ game.data.rating }}
            </span>

            <div>
              <v-rating
                v-model="gameRating[index]"
                color="white"
                active-color="yellow-accent-4"
                half-increments
                clearable
                hover
                @input="submitRating(game.id, gameRating[index])"
                size="18"
              ></v-rating>
            </div>
          </v-card-actions>
        </v-card>
      </div>
      <div class="flex-items"></div>
    </div>
  </div>
</template>

<script setup>
import SlideAnime from '@/components/SlideAnime.vue'
import { ref, onMounted } from 'vue'
import { db } from '../main'
import { collection, getDocs, doc, updateDoc } from '@firebase/firestore'

const allgameData = ref([])
const gameRating = ref([])

async function show() {
  allgameData.value = []
  const querySnapshot = await getDocs(collection(db, 'Game'))
  querySnapshot.forEach((doc) => {
    const myDoc = { id: doc.id, data: doc.data() }
    console.log(doc.id, ' => ', doc.data())
    console.log(myDoc)
    allgameData.value.push(myDoc)
    gameRating.value.push(myDoc.data.rating)
  })
}

function submitRating(gameID, rating) {
  console.log('Game ID:', gameID)
  console.log('Rating:', rating)

  const gameRef = doc(db, 'Game', gameID)

  updateDoc(gameRef, {
    rating: rating
  })
    .then(() => {
      console.log('Rating updated successfully')
    })
    .catch((error) => {
      console.error('Error updating rating:', error)
    })
}

onMounted(show)
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
}

.flex-items:nth-child(1) {
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  display: block;
  flex-grow: 4;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(3) {
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}
.set-location {
  margin: 50px 50px;
}

h1 {
  size: 50px;
}
</style>
