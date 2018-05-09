<template>
    <div class = "GodBox">
        <div class="GodBoxCont">
            <div class = "common-header">发现好电影</div>
            <ul>
                <li v-for = 'ad in ads' :key = "ad.id" :style = "{borderColor:ad.color }">
                    <p><span :style = "{color:ad.color }" v-if = "ad.id!==5">{{ad.title}}</span></p>
                </li>
            </ul>
        </div>     
    </div>
</template>

<script>
export default {
  name:'GodBox',
  data:function(){
      return {
          ads:[
              {id:1,title:'同时入选IMDB250和豆瓣电影250的电影',color:'#FFAC2D'},
              {id:2,title:'带你进入不正常的世界',color:'CC3344'},
              {id:3,title:'用电【影】来祭奠逝去的岁月',color:'#42BD56'},
              {id:4,title:'女孩们的故事【电影】',color:'#FF4055'},
              {id:5,title:'',color:''},
              {id:6,title:'使用 App 【找电影】功能',color:'#42BD56'},
              {id:7,title:'科幻是未来的钥匙——科幻启示录【科幻题材】',color:'#2384E8'},
              {id:8,title:'美国生活面面观',color:'#FFC46C'},
              {id:9,title:'2015终极期待',color:'#4F9DED'},
              {id:10,title:'经典韩国电影——收集100部',color:'#3BA94D'}
          ]
      }
  }
}
</script>

<style lang="scss" scoped>

    .GodBoxCont{
        width:3.75rem;
        ul{
            overflow-x: auto;
            padding-top: 15px;
            margin-left: -0.05rem;
            font-size: 0px;     
            padding:15px 0.15rem 43px 0.15rem;
            white-space: nowrap;
            li{
                width: auto;
                font-size:15px;

                height: 50px;
                border-radius:5px;
                text-align: center;
                margin: 0 0 8px 8px;
                display: inline-block;
                border: solid 1px;
                p{
                    height:50px;
                    display: flex;
                    align-items: center;
                }
                span{
                    vertical-align: middle;
                    padding:0 0.248rem;
                }
            }
            li:nth-child(5){
                width: 100%;
                display: block;
                height: 1px;
                border: 0;
                margin: 0;
                
            }
        }
    }
</style>