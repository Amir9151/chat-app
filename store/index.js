import vuex from "vuex"
import users from "@/api/data.Json"

export default () => {
  return new vuex.Store({
     state :() => ({
      userData:[],
      useId:0,
      newMessege:"",
    

  }),
    mutations: {
    setInfo(state,data){
    state.information=[...data]
    // console.log("setInfo",state.information)
    },
    setUserData(state,data){
     state.userData=data
    //  console.log("state.userData",data)
    },
    setId(state,id){
      state.useId=id
      // console.log("id/////state",state.useId)
    },
    setMessege(state,newMessage){
     state.newMessege=newMessage
    //  console.log("muteeeeeeee",state.newMessege)
    },

    },


    actions: {
      getUserData({commit}){
        commit("setUserData",users)
        // console.log("getUserData",users)
      },
      setId({commit},id){
        commit("setId",id)
      //  console.log("id",id)
      },
      sendMessage({commit},newMessage){
        // console.log("newMessage",newMessage)
        commit("setMessege",newMessage)
      },
      setSideBarFlag({commit},flag){
      commit("setSideBarFlag",flag)
      console.log("flagggg",flag)
      }
  },

  
    getters: {
      showUsersdata(state) {
       return state.userData
     },
     showUserId(state){
      return  state.useId
     },
      enterMessege(state){
      return state.newMessege
     },
   

     },
  })
}




