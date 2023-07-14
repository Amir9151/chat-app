<template>
   
   <div 
   class="bg-gray-200 pb-1 fixed sm:w-8/12 top-0 right-0">
                <div  class=" flex flex-row avatar overflow-hidden  p-3 bg-gray-100">
                    <img :src="require(`~/assets/img${image}`)" class="object-fill col-span-1 rounded-lg w-12 h-12" /> 

                    <div class="col-span-3 px-4">
                        <div class="flex flex-col ">
                            <h3 class="font-bold ">{{name}}</h3>
                            <div class="">{{description}}</div>
                            
                        </div>
                    </div>
                </div>
   </div>

</template>

<script>
  import {mapGetters} from "vuex";

export default {
  name: 'userInfo',
  data() {
    return {
      users:[],
      name:null,
      description:null,
      image:null,
    
    };
  },

  computed:{
     ...mapGetters(["showUserId","showUsersdata","sideBarRes"]),

  },
  created(){
   
    this.users=[...JSON.parse(JSON.stringify(this.showUsersdata))]
    this.image=this.users[this.showUserId].image

    this.name=this.users[this.showUserId].title
    this.description=this.users[this.showUserId].description
    // console.log("idddddddd",this.users[this.showUserId].image)

    // this.user(this.showUserId)
    // this.setId(0)
  
  },
  watch:{
    showUserId(value){
      this.name=this.users[value].title
      this.description=this.users[value].description
      this.image=this.users[value].image
    //  console.log("watch",value)
    }
  },
  methods:{
    // user(i){
    //   let user=this.showUsersdata
    //   let x=user[i]
    //   console.log("jjjjj",x.id)
    //   return x.id
    //  }
  }
}
</script>

<style >



</style>
