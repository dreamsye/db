<template>
    <div class = "mine page">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {   
    name:'Mine',
    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next((vm)=>{
       let userId = vm.$store.state.LoginIf.userInfo.userId
       let routeName = vm.$route.name
        if(routeName!=='login'&&routeName!=='user'){
            if(!userId){
                alert("在进入我的中心之前请先登录,账号密码都为aaa")
                vm.$router.replace({name:'login'})
            }
            else{
                vm.$router.replace({name:'user'})
            }
        }
    })
  }
}
</script>

<style lang="scss" scoped>
    .goLogin,.goMine{
        display: block;
        width:2rem;
        height: 40px;
        font-size:20px;
        border:1px solid orchid;
    }
</style>
