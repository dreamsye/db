<template>
  <div id="app">
    <Header></Header>
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/common/Header/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>

</style>
