import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Detail from '../components/Detail/Detail.vue'
import Goods from '../components/Cart/Goods.vue'
import List from '../components/List/List.vue'
import Mine from '../components/Mine/Mine.vue'
import Login from '../components/Mine/Login.vue'
import User from '../components/Mine/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/list/:filmType',
      name:'list',
      component:List
    },
    {
      path:"/detail/:filmId",
      name:'detail',
      component:Detail
    },
    {
      path:'/goods',
      name:'goods',
      component:Goods
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine,
      children:[{path:'user',name:'user',component:User},
                {path:'login',name:'login',component:Login}],
      beforeEnter:(to,from,next)=>{
        next()
      }
    }
  ]
})
