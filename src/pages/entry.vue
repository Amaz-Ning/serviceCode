<template>
    <div class="entry">
        <list-item
            v-for="(item, index) in colors"
            :key="index"
            :itemData="item"
        ></list-item>
    </div>
</template>

<script>
import ListItem from '../components/listItem.vue'
export default {
    data() {
        return {
            colors: [
                {
                    color: 0,
                    path: 'picture'
                },
                {
                    color: 1,
                    path: 'code'
                },
                {
                    color: 2,
                    path: 'article'
                },
                {
                    color: 3,
                    path: 'other'
                }
            ]
        }
    },
    components: {
        ListItem
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.entry {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
