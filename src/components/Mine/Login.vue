<template>
    <div class = "login page">
        <header>登录页面</header>
        <span>用户名：</span><input class = "Name" type="text" v-model= 'name'><br>
        <span>密码：</span><input class ="Pass" type="text" v-model = "pass">
        <br><button @click = "login">登录</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'Login',
    data(){
        return {
            name:'',
            pass:''
        }
    },
    methods:{
        login(){
            console.log(this.name,this.pass)
            let params = {
                username:this.name,
                password:this.pass,

                cb:(result)=>{
                    console.log(this.$store.state.LoginIf)
                    console.log(result)
                    if(result===1){
                        alert('登陆成功')
                        this.$router.push({name:'user'})
                    }else{
                        alert('登录失败，账号名或密码错误')
                    }
                }
            }
            console.log(params)
            this.$store.dispatch('login',params)
        }
    }

}
</script>

<style lang="scss" scoped>
    .Name , .Pass{
        width:2rem;
        height: 30px;
        border:1px solid;
    }
    .login span{
        display: inline-block;
        width:0.7rem;
        height:30px;
    }
</style>