<template>
  <div class="hello">
    <div var="Kuchen" >
    <div v-bind:style="{ display: 'flex', 'flex-direction': fdirection, 'justify-content': 'center' }">
        <slot></slot>
        <button v-bind:class="[{'': true}, butclass ? butclass : '']" v-for="item in items" :key="item.name" @click="$emit('ClickButton', item)">{{item}}</button>
    </div>



    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    fdirection: String,
    items: Array,
    butclass: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.VerticalCont {
  display: flex; 
  flex-direction: row;
  background: #555555
}
.HorizontalCont {
  display: flex; 
  flex-direction: column;
  background: #FF0000
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
