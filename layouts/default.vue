<template>
  <div class="grid grid-cols-12 grid-flow-row ">
     <div 
      class=" bg-gray-200 col-span-12 sm:col-span-4 sm:block">
      <side-bar> </side-bar>
     </div>
    <div 
    class="hidden sm:block sm:col-span-8">
      <!-- Main content here -->
       <Nuxt></Nuxt>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
  },
 
 
}
</script>

<style>



</style>
