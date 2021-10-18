<template>
  <div class="entry-list-container">
      <div class="px-2 pt-2">
          <input 
            type="text"
            class="form-control"
            placeholder="Buscar entradas">
      </div>
      <div class="scroll-area">
          <h2 v-for="item in 100" :key="item">
              <Entry />
          </h2>
      </div>
  </div>
</template>

<script>
import Entry from './Entry.vue'
export default {
    components: {
        Entry
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
    border-radius: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.scroll-area {
    height: calc(100vh - 120px);
    overflow: scroll;
}
</style>