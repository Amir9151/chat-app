<template>
  <div>
     <userInfo></userInfo>
    <chatBox></chatBox>
    <chatInput ></chatInput>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: 'IndexPage',
     transition: {
    name: 'fade',
    mode: 'out-in',
 
  },
  created(){
  // this.getUserData()
  },
  computed:{
  },
  methods:{
    // getUserData(){
    //   this.$store.dispatch("getUserData")
    // }
  }
}
</script>

<style>

</style>