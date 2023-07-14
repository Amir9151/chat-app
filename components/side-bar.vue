<template>
    <div class="sidebar">
       <div class="grid grid-cols-6  mb-1 bg-white p-3 w-full h-full cursor-default ">
             <div class=" relative col-span-5 ">
                <input type="text" placeholder="Search " class="search-input px-9 py-3  rounded-lg focus:border-blue-500 focus:ring-blue-600" />
                <div class="absolute inset-y-0 left-3 pr-3 flex items-center pointer-events-none">
                  <img :src="require(`~/assets/img/search.png`)"   alt="" class="object-fill w-5 h-5 ">
            </div>
            </div>
            <div class="col-span-1 flex items-center justify-center ml-2 ">
                <button type="button" class="border border-blue-600  h-full w-full rounded-lg m-0 inline-flex justify-center items-center p-1">
               
                  <img :src="require(`~/assets/img/1387889.png`)"   alt="" class="object-fill max-w-7 max-h-7 ">

                </button>
            </div>
       </div>
        <user></user>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
      
      };
    },
  }
  </script>
  
  <style scoped>
  .sidebar {
    /* width:450px; */
    padding:0px 6px 0px 0px;
  }
  
 
  
  .search-input {
    width: 100%;
    border: 1px solid #ccc;

  }
  

  
  @media (max-width: 767px) {
    .sidebar {
      width: 100%;
    }
  }
  </style>
  