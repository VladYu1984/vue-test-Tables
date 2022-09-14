<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Выберите колонку сортировки</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >{{ option.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'v-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        },
        modelValueNumber: {
            type: Number
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>

</style>