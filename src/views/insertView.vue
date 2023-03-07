<script setup>
import { ref } from 'vue'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../main'
import Swal from 'sweetalert2'

const gameData = ref({
  gameTitle: '',
  gamePlaform: '',
  gameGenre: '',
  gameReleseDate: '',
  gameImage: ''
})

const allgameData = ref([])

async function addGameData() {
  try {
    const docRef = await addDoc(collection(db, 'Game'), gameData.value)
    console.log('Document written with ID: ', docRef.id)
    showMenu()
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

async function showMenu() {
  allgameData.value = []
  const querySnapshot = await getDocs(collection(db, 'Game'))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // allMenu.value.push({ ...doc.data(), id: doc.id });\
    const myDoc = ref({ id: doc.id, data: doc.data() })
    console.log(doc.id, ' => ', doc.data())
    // console.log(allMenu.value);
    console.log(myDoc)
    allgameData.value.push(myDoc.value)
  })
}

async function removeData(gameID) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteDoc(doc(db, 'Game', gameID))
      showMenu()
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
    }
  })
}
</script>

<template>
  <div>
    <div>
      Form :
      <form @submit.prevent="addGameData()">
        gameTitle :
        <input type="text" name="" id="" v-model="gameData.gameTitle" required />
        <br />
        gamePlaform :
        <select type="text" name="" id="" v-model="gameData.gamePlaform" required>
          <option value="PC">PC</option>
          <option value="Play_Station">PS4/PS5</option>
          <option value="Xbox">Xbox</option>
          <option value="NintedoSwitch">NintedoSwitch</option>
        </select>
        <br />
        gameGenre :
        <input type="text" name="" id="" v-model="gameData.gameGenre" required />
        <br />
        gameReleseDate :
        <input type="date" name="" id="" v-model="gameData.gameReleseDate" required />
        <br />
        gameImage :
        <input type="text" name="" id="" v-model="gameData.gameImage" required />
        <br />
        <button type="submit">เพิ่มข้อมูล</button>
      </form>
    </div>
    <br />
    <div>
      <button @click="showMenu()">แสดงเมนู</button>
      <table>
        <tr>
          <th>gameTitle</th>
          <th>gamePlaform</th>
          <th>gameGenre</th>
          <th>gameReleseDate</th>
          <th>gameImage</th>
        </tr>
        <tr v-for="(item, index) in allgameData" :key="index">
          <td>{{ item.data.gameTitle }}</td>
          <td>{{ item.data.gamePlaform }}</td>
          <td>{{ item.data.gameGenre }}</td>
          <td>{{ item.data.gameReleseDate }}</td>
          <td><img :src="item.data.gameImage" alt="" width=" 50" /></td>
          <td><button @click="removeData(item.id)">ลบ</button><br />{{ item.id }}</td>
        </tr>
      </table>
    </div>
    <br />
  </div>
</template>

<style scoped>
* {
  color: black;
}

.box-from {
  text-align: 40px;
  max-width: 100%;
}
</style>
