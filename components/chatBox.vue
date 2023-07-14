<template>
  <div class="flex flex-col mt-20 overflow-y-auto">

    <!-- Chat messages -->
    <div class="flex-grow p-4 overflow-y-auto ">
      <div v-for="(message,index) in userMessege" :key="index" class="flex items-start mb-6">
        <div  class="mr-2">
          <img :src="require(`~/assets/img${image}`)"  class="object-fill rounded-full w-10 h-10 " /> 
        </div>
        <div
          class="rounded-lg p-2 bg-gray-200 text-blue-500 font-bold max-w-xs inline-block break-words mr-auto"
        >
          {{ message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters} from "vuex";

export default {
  data() {
    return {
      messages:[],
      userMessege:[],
      users:[],
      image:null
    };
  },
  computed:{
     ...mapGetters(["showUserId","showUsersdata","enterMessege"]),
    

  },
  watch:{
    showUserId(value){
      // this.messages.splice(0,1,this.users[value].text)
      this.image=this.users[value].image
      this.userMessege=this.messages[value].text   
      // console.log("jjjjjwatc",this.messages) 

    },
    enterMessege(value){
      this.messages[this.showUserId].text.push(value)
      this.userMessege=this.messages[this.showUserId].text 
      // console.log("this.messages",this.messages)
      // this.users.forEach((item)=>{
      //  console.log("itemmmmmm",item)
      // })
      // this.messages.push(value)
    //  console.log("wwwwwwwwwwwwwww",value)
    }
  },
  mounted(){
  this.users=[...JSON.parse(JSON.stringify(this.showUsersdata))]
  this.users.forEach((item)=>{
    let messege= {id:item.id,text:[item.text]};
    this.messages.push(messege)
  })
 this.userMessege=this.messages[this.showUserId].text  
  this.image=this.users[this.showUserId].image

  // console.log("charbox/////////",this.messages)
  },
  methods: {
   
  },
};
</script>

<style>
html,
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
