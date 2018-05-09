<template>
  <div class= "HomeTopItem"> 
      <ul class = "top-items">
        <router-link tag = "li" :to= "{name:'detail',params:{filmId:film.id}}" v-for = "film in films" :key = "film.id" v-if = "films">
           <div class = "imgBox">
             <img :src="film.cover.url" alt="" >
           </div>
           <div class = "title">
             <p>
               {{film.title}}
             </p>
            <p v-if = "film.rating" class = "grade">
               评分：{{film.rating.value}}
            </p>
           </div>
        </router-link>
      </ul>
  </div> 
</template>

<script>
// import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
export default {
  name:'HomeTopItem',
  props:['type','id'],
  data(){
    return {
      films:[],
      stars:[{id:1,type:'fa'}],
      isShow:false
    }
  },
  created(){
     let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/'+ this.type + '/items?os=windows%207'
     let cb = 'jsonp' + this.id
     let params = {
        callback:cb,start:0,count:8,loc_id:108288
     }
     this.$jsonp(url,params).then(res=>{
        this.films = res.subject_collection_items
     }).catch(err=>{
        console.log(err)
     })
  }
}
</script>

<style lang="scss" scoped>
  .yellow{
    color:orange;
  }
  .top-items{
    width:3.75rem;
    display: flex;
    padding-top: 15px;
    overflow-x: auto;
    padding-left: 0.1792rem;
    li{
      height:187.23px;
      width:1rem;
      margin-right:0.076rem;
      .imgBox{
        width: 1rem;
        height:142.84px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .title{
        font-size: 15px;
        text-align: center;
        p{
          height:20px;
          overflow: hidden;
        }
        .grade{
          font-size:12px;
          color:#ccc;
        }
      }
    }
  }
  
</style>
