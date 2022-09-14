<template>
    <div class="v-table__row">
        <div class="row row__date">{{ row_data.date }}</div>
        <div class="row row__name">{{ row_data.title }}</div>
        <div class="row row__count">{{ row_data.count }}</div>
        <div class="row row__distance">{{ row_data.distance }}</div>
    </div>
</template>

<script>
export default {
    props: {
        row_data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }    
}
</script>

<style>
.v-table__row {
    display: flex;
    justify-content: space-around;
}

.row {
    flex-basis: 25%;
    padding: 8px 16px;
    text-align: left;
}
</style>