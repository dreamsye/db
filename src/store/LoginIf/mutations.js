import {CHANGE_USER} from './const' 

export default{
    [CHANGE_USER](state,userInfo){
        state.userInfo = userInfo
    }
}
