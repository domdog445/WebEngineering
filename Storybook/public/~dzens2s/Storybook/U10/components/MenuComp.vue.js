
export default {
	template: `
<div>
  <div var="Kuchen" >
  <div v-bind:style="{ display: 'flex', 'flex-direction': fdirection, 'justify-content': 'center' }">
      <slot></slot>
      <button style='border-radius: 80px;
			height: 30px;
			padding: 0px 30px 0px 30px;
			margin: 10px 10px 10px 10px;
			background-color: #6B709B;
      color: #EEEEEE;
			font-weight: bold;' v-bind:class="[{'': true}, butclass ? butclass : '']" v-for="item in items" :key="item.name" @click="$emit('clickbutton', item)">{{item}}</button>
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
