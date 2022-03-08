
export default {
	template: `
<div class="hello">
  <button @click="$emit('ClickButton', $attrs.name)">{{$attrs.name}}</button>
</div>`,
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
