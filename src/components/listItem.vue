<template>
    <div
        class="container"
        :style="{ background: backgroundColors[itemData.color] }"
        @click="changePath(itemData.path)"
    ></div>
</template>

<script>
export default {
    props: {
        itemData: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            backgroundColors: [
                'linear-gradient(0deg,#f0f0f0,#fa016d)',
                'linear-gradient(0deg,#feb692,#f55555)',
                'linear-gradient(0deg,#f86a6a,#512cb7)',
                'linear-gradient(0deg,#ef7810,#e4c36b)'
            ]
        }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        changePath(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    top: 0;
    transition: all 0.3s;
    position: relative;
    cursor: pointer;
    height: 600px;
    width: 280px;
    border-radius: 8px;
}
.container:hover {
    top: -20px;
    box-shadow: 3px 3px 8px #333;
}
</style>
