<template>
   
      <div class="grid grid-cols-1 gap-y-1">
      <div v-for="(avatar, index) in avatars" :key="index"
      @click="setId(avatar.id)" 
      class="avatar grid grid-cols-5 overflow-hidden  bg-white p-3 hover:bg-gray-100 cursor-pointer ">
          <img :src="require(`~/assets/img${avatar.image}`)"  class="object-cover h-20 w-20 col-span-1 rounded-lg" /> 
          <div class="col-span-3 px-4">
             <div class="flex flex-col ">
                  <h3 class="font-bold ">{{ avatar.title }}</h3>
                  <div class="mb-2 mt-1">{{ avatar.description }}</div>
                  <div class="flex flex-row text-sm">
                      <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold  hover:text-white px-3  border border-red-500 hover:border-transparent rounded">
                        inbox
                      </button>
                      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold  hover:text-white px-3  border border-blue-500 hover:border-transparent rounded mx-1">
                        group
                      </button>
                  </div>
             </div>
          </div>
     </div>
      </div>

  </template>
  
  <script>
  import { mapGetters} from "vuex";


  export default {
    name: 'avatar',
    data() {
      return {
        avatars:[],
      };
    },
    computed:{
     ...mapGetters(["showUsersdata"]),
  },
  created(){
  this.getUserData()
  // this.setId(0)
  },
  methods:{
    getUserData(){
      this.$store.dispatch("getUserData").then(()=>{
        this.avatars=[...JSON.parse(JSON.stringify(this.showUsersdata))]
        // console.log("address",this.avatars)
      }
     
      )
    },
    setId(id){
      this.$store.dispatch("setId",id)
      if(window.innerWidth<767){
      this.$store.dispatch("setSideBarFlag",false)
      }
    }
  }
  }
  </script>
  
  <style >
 
  

  </style>
  