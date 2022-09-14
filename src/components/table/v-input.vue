<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style scoped>   
.input {
    width: 50%;
    color:black;
    padding: 10px 15px;
    margin-bottom: 15px;
    margin-right: 20px;
}
</style>