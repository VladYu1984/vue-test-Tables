<template>
  <div id="App">
    <div class="app__btns">
      <vInput 
        v-model="searchQuery"
        placeholder="Поиск..."
      />
      <div class="selectStyle">
        <vSelect 
          v-model="selectedSort"
          :options="sortOptions"
        />
      </div>
    </div>
    <vTable 
      :tables_data="searchedAndSortedTables"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import vTable from './components/table/v-table.vue'
import vSelect from './components/table/v-select.vue'
import vInput from '@/components/table/v-input.vue'

export default {
  name: 'App',
  components: {
    vTable, vSelect, vInput
  },
  data:() => {
    return {
      tables_data: [],
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'title', name:'По названию'},
        {value: 'count', name:'По количеству'},
        {value: 'distance', name:'По дистанции'},
      ]
    }
  },
  computed: {
    ...mapGetters([
      'TABLES'
    ]),
    sortedTables() {
      return [...this.TABLES].sort((TABLES1, TABLES2) => TABLES1[this.selectedSort]?.localeCompare(TABLES2[this.selectedSort]))
    },
    searchedAndSortedTables() {
      return this.sortedTables.filter(TABLES => TABLES.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  methods: {
    ...mapActions([
      'GET_TABLES_FROM_API'
    ])
  },
  mounted() {
    this.GET_TABLES_FROM_API()
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;   
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app__btns {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
