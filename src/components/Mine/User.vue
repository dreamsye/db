<template>
    <div class = "user page">
        恭喜{{name}}，成功进入我的页面！！！
        <router-link to="/">回到首页</router-link>
    </div>
</template>

<script>
export default {
    name:'User',
    data(){
        return {
            name:this.$store.state.LoginIf.userInfo.userName
        }
    }
}
</script>

<style lang="scss" scoped>
    a{
        display: block;
        width:1rem;
        font-size: 20px;
        border: 1px solid;
        margin-top:30px;
    }
</style>