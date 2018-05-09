<template>
    <div class = "page detail pleft">
        <header>{{intro.title}}</header>
        <section class = "clearfix">
            <div class = "left clearfix" >
                <p>{{intro.intro}}</p>
            </div>
            <div v-if = "intro.pic" class = "right clearfix">
                <img :src="intro.pic.normal" alt="">
            </div>
        </section>
        <footer>
            <div>
                <button @click = "goMine">进入我的中心</button>
            </div>
        </footer>
        <bottom></bottom>
    </div>
    
</template>

<script>
import Bottom from '../../components/common/Bottom/Bottom'
export default {
  name:'Detail',
  components:{
      Bottom
  },
  data(){
      return {
          intro:{}
      }
  },
  methods:{
      goMine(){
          this.$router.push({name:'mine'})
      }
  },
  created(){
   let id = this.$route.params.filmId
   this.$http.get('/mz/rexxar/api/v2/movie/' + id,{params:{
       count:4,
       start:0
   }}).then((res)=>{
       this.intro = res.data
   })
  }
}
</script>

<style lang="scss" scoped>
    .detail{
        header{
            padding-top: 20px;
            min-height:32px;
            font-size:24px;
            margin-bottom:40px;
            overflow-x: hidden;
        }
        section{
            min-height: 140px;
            display:flex;
            margin-bottom: 20px;
            .left{
                width:65%;
                min-height:140px;
                word-wrap: break-word;
                line-height: 22px;
            }
            .right{
                width:35%;
                min-height:140px;
                img{
                    width:1rem;
                }
            }
        }
        footer{
            button{
                display: flex;
                width:3rem;
                height:40px;
                font-size:20px;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>

