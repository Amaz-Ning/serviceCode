<template>
    <div class="welcome">
        <vue-particles
            style="width: 100%;height: 100%;"
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <button class="button" @click="entryIndex">welcome</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        entryIndex() {
            this.$router.push('/index')
        }
    }
}
</script>

<style scoped lang="scss">
.welcome {
    position: relative;
    background: url('../assets/image/timg.jpeg') no-repeat center center;
    .button {
        cursor: pointer;
        width: 98px;
        height: 36px;
        border: 1px solid #ccc; //自定义边框
        outline: none; //消除默认点击蓝色边框效果
        position: absolute;
        background: none;
        color: #ccc;
        border-radius: 3px;
        top: 0px;
        bottom: 0;
        left: 0px;
        right: 0;
        margin: auto;
        transition: all 0.3s;
    }
    .button:hover {
        border-color: #198ae7;
        color: #198ae7;
    }
}
</style>
