<template>
  <div class= "HomeTopBox">
      <div class = "top-three" v-for = "type in types" :key = "type.id"> 
        <header>
            <h1>{{type.title}}</h1>
            <router-link :to="{name:'list',params:{filmType:type.sort}}">更多</router-link>
        </header>
        <home-top-item :type = "type.sort" :id = "type.id"></home-top-item>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
import HomeTopItem from './HomeTopItem'
export default {
  name:'HomeTopBox',
  components:{
      HomeTopItem
  },
  data(){
      return {
          types:[
              {id:1,title:'影院热映',sort:'movie_showing'},
              {id:2,title:'免费在线观影',sort:'movie_free_stream'},
              {id:3,title:'新片速递',sort:'movie_latest'}
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
    .HomeTopBox{
        padding-top:10px;
    }
    .top-three{
        margin-bottom:30px;
        header{
            width:3.39rem;
            margin:0 auto;
            display: flex;
            height:24px;
            justify-content: space-between;
            h1{
                font-size:18px;
            }
            a{
                font-size:14px;
                color:#42bd56;
            }
        }
    }
</style>
