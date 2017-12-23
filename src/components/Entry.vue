<template lang="html">
  <div class="entry">
    <h1>TODO-List</h1>
    <button type="button" name="buttom" @click="check()">开始</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name:'Entry',
  data(){
    return{
      msg:'',
    }
  },
  methods:{
    check(){

      if (typeof(Storage) !== "undefined") {
        this.$router.push({path:'/index'})
      }
      else {
          this.msg = "抱歉！您的浏览器不支持 Web Storage ...";
      }
    },

  },

  mounted(){

  },
}
</script>

<style lang="css">
  .entry{
  }
</style>
