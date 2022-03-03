
export default {
	template: `
<div class="hello">
  <div var="Kuchen" >
  <div v-bind:style="{ display: 'flex', 'flex-direction': fdirection, 'justify-content': 'center' }">
      <slot></slot>
      <button v-bind:class="[{'': true}, butclass ? butclass : '']" v-for="item in items" :key="item.name" @click="$emit('ClickButton', item)">{{item}}</button>
  </div>



  </div>
</div>`,
  name: 'HelloWorld',
  props: {
    msg: String,
    fdirection: String,
    items: Array,
    butclass: String
  }
}
