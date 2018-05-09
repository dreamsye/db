import Vue from "vue"
import Vuex from "vuex"
import LoginIf from './LoginIf'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        LoginIf
    }
})

export default store