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
        <div class="container">
            <Form ref="form" label-width="80px">
                <FormItem style="color: red" label="账号">
                    <Input v-model="form.name" />
                </FormItem>
                <FormItem label="密码">
                    <Input type='password' v-model="form.password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="onLogin">登陆</Button>
                    <Button type="primary" @click="onRegister">注册</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
import {Button, Form, FormItem, Input} from 'element-ui';
import {loginIn, register} from '../api/api'
export default {
    data() {
        return {
            form: {
                name: '',
                password: ''
            }
        }
    },
    components: {
        Button,
        Form,
        FormItem,
        Input
    },
    computed: {},
    created() {},
    mounted() {
    },
    methods: {
        entryIndex() {
            this.$router.push('/index')
        },
        onLogin() {
            loginIn(this.form.name, this.form.password).then(res => {
                if (res.data.code == '200') {
                    this.$router.push('/index')
                }
            })
        },
        onRegister() {
            register(this.form.name, this.form.password).then(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style lang="scss">
.welcome {
    position: relative;
    background: url('../assets/image/timg.jpeg') no-repeat center center;
    .container {
        width: 500px;
        height: 200px;
        border-radius: 3px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
}
</style>
