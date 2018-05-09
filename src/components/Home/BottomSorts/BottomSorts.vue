<template>
    <div class = "BottomSorts">
        <div class = "common-header">分类浏览</div>
        <ul class = "clearfix">
            <li v-for = "item in sorts" :key = "item.id">
                <span>
                    {{item.sort}}
                </span>
                <i v-if = "item.sort" class = "fa fa-chevron-right"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'BottomSorts',
    data:function(){
        return {
            sorts:[
                {id:1,sort:'经典'},
                {id:2,sort:'冷门佳片'},
                {id:3,sort:'豆瓣高分'},
                {id:4,sort:'动作'},
                {id:5,sort:'喜剧'},
                {id:6,sort:'爱情'},
                {id:7,sort:'恐怖'},
                {id:8,sort:'科幻'},
                {id:9,sort:'文艺'},
                {id:10,sort:'成长'},
                {id:11,sort:'动画'},
                {id:12,sort:'华语'},
                {id:13,sort:'成长'},
                {id:14,sort:'欧美'},
                {id:15,sort:'韩国'},
                {id:16,sort:'日本'},
                {id:17,sort:'悬疑'},
                {id:18,sort:''}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .BottomSorts{
        margin-left:.1792rem;
       ul{
        display: flex;
        min-height:4.3809rem;
        flex-wrap: wrap;
        border-bottom:1px solid #ccc;
        padding-top: 15px;
        li{
            width:50%;
            display:flex;
            align-items: center;
            border-top:1px solid #ccc;
            border-right:1px solid #ccc;
            justify-content: space-between;
            padding-right: 0.1792rem;
            padding-left:0.1792rem;
            i{
                color:#ccc;
            }
        }
       }
    }
</style>
