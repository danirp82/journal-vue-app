<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input 
            type="text"
            class="form-control"
            placeholder="Buscar entradas"
            v-model="term">
        </div>

        <div class="mt-2 mb-2 d-flex flex-column">
            <button class="btn btn-primary mx-3"
                @click="$router.push({ name: 'entry', params: { id: 'new' }})">
                <i class="fa fa-plus-circle"></i>
                nueva entrada
            </button>
        </div>
        <div class="scroll-area">
        <Entry 
            v-for="entry in entriesByTerm"
            :key="entry.id"
            :entry="entry"/>
        </div>
    </div>
</template>

<script>
import Entry from './Entry.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        Entry
    },
    data() {
        return {
        term: ''
        }
    },
    computed: {
        ...mapGetters('journal',[
        'getEntriesByTerm',
        ]),
        entriesByTerm() {
            return this.getEntriesByTerm( this.term )
        }
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