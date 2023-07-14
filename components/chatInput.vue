<template>
    
  
        <div class=" bg-gray-200 p-3 messege-type flex flex-row sm:w-8/12">
                        <div class=" flex-grow-0 mr-2 flex items-center justify-center  bg-white rounded-lg px-2">
                    <button type="button" class="  h-full rounded-lg m-0 inline-flex justify-center items-center">

                    <img :src="require(`~/assets/img/paperclip_9547116.png`)"   alt="" class="object-cover w-7 h-7 ">

                    </button>
                    </div>

                    <div class=" flex-grow">
                    <input
                    v-model="newMessege"
                    @keyup.enter="sendMessage"
                     type="text" placeholder="Type a message (Press Enter)" class="search-input px-2 py-3  rounded-lg" />
                    </div>

                    <div class=" flex flex-grow-0 items-center justify-center mx-2 bg-white  rounded-lg px-2">
                        <button type="button" class="  h-full rounded-lg m-0 inline-flex justify-center items-center">

                        <img :src="require(`~/assets/img/microphone_10698390.png`)"   alt="" class="object-cover w-7 h-7 ">

                        </button>
                    </div>
        </div>

    

  </template>
  
  <script>
  export default {
    name: 'chatInput',
    data() {
      return {
        newMessege:""
      
      };
    },
    methods:{
    sendMessage(){
      this.$store.dispatch("sendMessage",this.newMessege).then(()=>{
        this.newMessege=""
      })

    },
    
    }

  }
  </script>
  
  <style scoped>

  
 
  
  .search-input {
    width: 100%;
    border: 1px solid #ccc;

  }
  .messege-type{
    position: fixed;
    bottom: 0;
    /* left:0; */
    right: 0;
    /* transform: translateX(-33%); */

 }
 
   
  </style>
  