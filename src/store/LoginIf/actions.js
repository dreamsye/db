import {CHANGE_USER} from './const' 
export default {
    login({commit},{username,password,cb}){
        setTimeout(()=>{
            if(username === 'aaa'&& password === 'aaa'){
                let userInfo = {
                    userName:'123',
                    userId:1
                } 
                cb(1)
                console.log('action发送')
                commit(CHANGE_USER,userInfo)
               
            }else{
                cb(0)
            }        
        },1000)
    }
        
}