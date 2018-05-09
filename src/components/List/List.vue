<template>
    <div class = "page list">
        <ul  v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10"
             infinite-scroll-immediate-check="false"
        >
         <!-- infinite-scroll-immediate-check="false" -->
            <router-link :to="{name:'detail',params:{filmId:item.id}}" tag='li' v-for = "item in filmLists" :key= "item.id">
                <div class="imgBox" v-if = "item">
                    <img :src="item.cover.url" alt="">
                </div>
                <h2>{{item.title}}</h2>
                <h3 v-if = "item.rating">评分：{{item.rating.value}}</h3>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name:'list',
  data(){
      return {
          filmLists:[],
          cbNum:1,
          start:0,
          count:18,
          loading:false,
          hasMore:true,
          type:this.$route.params.filmType,
          LastToastShow: false
      }
  },
  methods:{
      getfilms(){
        let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/' + this.type + '/items';
        let params = {
            callback:this.cbNum + 'jsonp',
            start:this.start,
            count:this.count,
            loc_id:108288
        }
        //开始加载
        this.loading = true;

        let toast = Toast({
            message: '正在加载...',
            duration: -1,
            iconClass: 'fa fa-cog fa-spin'
        });
        //获取数据
        this.$jsonp(url,params).then(res=>{
            
            this.filmLists = this.filmLists.concat(res.subject_collection_items)        
            let total = res.total
            this.loading = false;
            toast.close()
           
            if((this.start + this.count) >= total){
                this.hasMore = false;
                return false
            }

            this.cbNum++;

            this.start += this.count;      
        }).catch(err=>{
            console.log(err)
        })
      },
      //下拉滚动条事件
       loadMore(){
            if(!this.hasMore){
                
                if(!this.LastToastShow) {
                    Toast({
                        message: '没有更多了', position: 'bottom', duration: 1000
                    });
                    this.LastToastShow = true
                }
                    
                return false;
            }
            this.getfilms();
        }
},
watch: {
      type:{
        immediate: true,
        handler (val) {
            //切换类型后的操作
            this.start = 0;
            this.filmsLists = [];
            this.hasMore = true;
            this.loading = false
            this.getfilms()
        }
      }
  }
}
</script>

<style lang="scss" scoped>
.list{
    ul{
        display: flex;
        flex-wrap: wrap;
        width:3.75rem;
       li{
           width: 33.3%;
         .imgBox{
            margin:0 auto;
            width:0.912rem;
            height:130.41px;
            img{
                width: 100%;
                height:130.41px;
            }
        }
        h2{
             margin:0 auto;
            width:0.912rem;
            text-align: center;
            height: 22px;
            font-size: 14px;
            overflow: hidden;
        }
        h3{
             margin:0 auto;
            width:0.912rem;
            text-align: center;
            height: 22px;
            font-size: 12px;
            color:#9b9b9b;
        }
     }
}
}
</style>

