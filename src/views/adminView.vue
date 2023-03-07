<template>
  <div class="flex-container">
    <v-card class="flex-items" width="344" variant="outlined">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">Insert Game AND Delead Game</div>
          <div class="text-h6 mb-1">+ Game, - Game</div>
          <div class="text-caption">เพิ่มหรือลบเกมในรายการที่ให้ รีวิว</div>
        </div>
      </v-card-item>
      <v-card-actions>
        <router-link to="/insert"><v-btn variant="outlined"> Button </v-btn></router-link>
      </v-card-actions>
    </v-card>
    <v-card class="flex-items" width="344" variant="outlined">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">Report</div>
          <div class="text-h6 mb-1">Get report</div>
          <div class="text-caption">รับ report จาก MEMBER</div>
        </div>
      </v-card-item>
      <v-card-actions>
        <v-btn variant="outlined"> Button </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup></script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
}

.flex-items {
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  margin: 50px 50px;
}
</style>
