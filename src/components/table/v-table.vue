<template>
    <div class="v-table">
        <div class="v-table__header">
            <p>Дата</p>
            <p>Название</p>
            <p >Количество
                <i 
                @click="tablesDataSorted"
                class="material-icons">unfold_more</i>
            </p>
            <p>Расстояние
                <i 
                @click="tableDataSorted"
                class="material-icons">unfold_more</i>
            </p>
        </div>
        <div class="v-table__body">
            <v-table-row 
                v-for="row in paginatedTables"
                :key="row.id"
                :row_data="row"
            />
        </div>
        <div class="v-table__pagination">
            <div class="page"
                v-for="page in pages"
                :key="page"
                :class="{'page__selected': page === pageNumber}"
                @click="pageClick(page)"
            >{{page}}</div>
        </div>
    </div>
</template>

<script>
import vTableRow from './v-table-row.vue'

export default {
    props: {
        tables_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            tablesPerPage: 10,
            pageNumber: 1,
        }
    },
    components: {
        vTableRow
    },
    computed: {
        pages() {
            return Math.ceil(this.tables_data.length / 10);
        },
        paginatedTables() {
            let from = (this.pageNumber - 1) * this.tablesPerPage;
            let to = from + this.tablesPerPage;
            return this.tables_data.slice(from, to);
        },
        // tablesDataSorted() {
        //     if(this.sortBy === 'count') {
        //         return [...this.tables_data].sort((a,b)=>a.count-b.count);
        //     } else {
        //         return [...this.tables_data].sort((a,b)=>a.distance-b.distance);
        //     }
        //     return this.tables_data
        // },
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page;
        }
    }
}
    
</script>

<style>
.v-table {
    max-width: 900px;
    margin: 0 auto;
}

.v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px gray;
}

.v-table__header>p {
    display: flex;
    align-items: center;
    flex-basis: 25%;
    text-align: left;
    cursor: pointer;
}

.v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
}

.page {
    padding: 8px;
    margin-right: 10px;
    border: solid 1px silver;
}

.page:hover {
    background: teal;
    cursor: pointer;
    color:white;
}

.page__selected {
    background: teal;
    cursor: pointer;
    color:white;
}
</style>