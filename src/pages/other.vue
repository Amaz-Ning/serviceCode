<template>
    <div>other</div>
</template>

<script>
import Api from '../api/api.js'
export default {
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {
        Api.getUserInfo().then(res => {
            console.log(res)
        })
    },
    methods: {}
}
</script>

<style scoped lang="scss"></style>
