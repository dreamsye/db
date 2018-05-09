<template>
    <div class = "Bottom">
        <div class = 'BottomTop'>
            <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt="">
            <div>
                <span>豆瓣</span>
            </div>
        </div>
            <p class="bp"><a href="">免费下载 iOS / Android 版客户端</a></p>
        
    </div>
</template>

<script>
export default {
  name:'Bottom'
}
</script>

<style lang="scss" scoped>
    .Bottom{
        padding: 0 0 20px 0;
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 15px;
    }
    .BottomTop{
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 15px;
        text-align: center;
        font-size: 15px;
        width:1.32rem;
        height:48px;
        display: flex;
        align-items: center;
        img{
            display: inline-block;
            width: 40%;
            height:48px;
            margin-right: 0.12rem;
        }
        span{
            font-size:24px;
        }
    }
     .bp{
           text-align: center;
            a{
                font-size: 16px;
                color:#42bd56;
            }   
        }
</style>
