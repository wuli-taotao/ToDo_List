<template lang="html">
  <div>
    <input v-model="msg" type="text" name="" value="">
    <button type="button" name="button" @click="add()">add</button>

    <ol v-if="ol">
      <li v-for="item in list">
        {{item.value}}
        <button class="delBtn" type="button"  @click="del(item.no)">删除</button>
      </li>
    </ol>

    <div class="" id="result">

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'',
      list:[],
      startNum:0,
      ol:false,
    }
  },

  methods:{

    getStart(){
      let i = 0
      while(localStorage.getItem(i)!=null){
        i++
      }
      return i;
    },

    add(){
      localStorage.setItem(this.startNum++, this.msg);
      this.msg=''
      this.retrieve()
    },

    del(no){
      this.list[no]={
        no:no,
        value:''
      }
    },

    retrieve(){
      let j = 0;
      while(localStorage.getItem(j)!=null){
        this.list[j] = {
          no:j,
          value:localStorage.getItem(j)
        }
        j++
      }
    },

    keyDownSearch(e){
          // 兼容FF和IE和Opera
          var theEvent = e || window.event;
          var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
          if (code == 13) {
              this.add();//具体处理函数
              return false;
          }
          return true;
      }},

  mounted(){
    this.startNum = this.getStart();
    this.retrieve()
    this.ol=true

    document.onkeydown=this.keyDownSearch;

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ol{
  margin: 0 auto;
  width: 100px;
}
li{
  text-align: left;
}
a {
  color: #42b983;
}

.delBtn{
  float:right;
}
</style>
