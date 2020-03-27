<template>
    <div class="box">
        <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.box {
    height: 100%;
    .view {
        height: 100%;
    }
}
</style>
