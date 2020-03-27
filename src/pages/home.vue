<template>
    <div class="home">
        <top-bar></top-bar>
        <router-view class="index_view"></router-view>
    </div>
</template>

<script>
import TopBar from '../components/topBar.vue'
import ListItem from '../components/listItem.vue'
export default {
    data() {
        return {}
    },
    components: {
        ListItem,
        TopBar
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.index_view {
    height: calc(100% - 48px);
}
</style>
