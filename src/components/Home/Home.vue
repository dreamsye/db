<template>
  <div class= "home page">
      <home-top-box></home-top-box>
      <god-box></god-box>
      <bottom-sorts></bottom-sorts>
      <bottom></bottom>
  </div>
</template>

<script>
import GodBox from './GodMovie/GodBox'
import HomeTopBox from './TopList/HomeTopBox'
import BottomSorts from './BottomSorts/BottomSorts'
import Bottom from '../common/Bottom/Bottom'
export default {
  name:'Home',
  components:{
      HomeTopBox,GodBox,BottomSorts,Bottom
  }
}
</script>

<style lang="scss" scoped>
    
</style>
