<template>
    <div class = "header">
        <div class="header-content">
            <router-link :to = "{name:'home'}" tag = 'h1' class = "left">豆瓣</router-link>
            <nav>
                <ul class = "right">
                    <router-link to = '/' tag = "li" v-for = "nav in navs" :key = 'nav.id' :class = "nav.cName">
                        {{nav.title}}
                    </router-link>
                </ul>
                <span class = "fa fa-list-ul sort"></span>
            </nav>   
        </div>
    </div>
</template>

<script>
export default {
  name:'Header',
  data(){
      return {
            navs:[
              {id:1,title:'电影',cName:'blue'},{id:2,title:'图书',cName:'grown'},{id:3,title:'广播',cName:'deep-grown'},{id:4,title:'小组',cName:'light-blue'}
            ]
      }
  }
}
</script>

<style lang="scss" scoped>
    .blue{
        color: #2384E8;
    }
    .grown{
        color:#9F7860;
    }
    .deep-grown{
        color:#E4A813;
    }
    .light-blue{
        color:#2AB8CC;
    }
    .header{
        width:100%;
        background: #fff;
        height:47px;
        position: fixed;
        z-index: 99;
        border-bottom: 1px solid #f3f3f3;
        .header-content{
            background: #fff;
            width:3.39rem;
            height:47px;
            display: flex;
            margin:0 auto;
            justify-content: space-between;
            align-items: center;
            h1{
                width:0.46rem;
                line-height:22px;
                color: #00b600;
                font-size: 22px;
                font-weight: 900;
                background-size: cover
            }           
            nav{
                width: 2.2056rem;
                height:22.28px;
                display: flex;
                align-items: center;
                ul{
                    width:1.96rem;
                    height:20px;
                    li{
                        display:inline-block;
                        width:0.3rem;
                        height: 17px;
                        font-size:15px;
                        margin-right: 0.19rem;
                    }
                }
                span{
                    font-size:18.28px;
                }
                .sort{
                    color: #00b600;
                }
                
            }
        }
}
    
</style>

