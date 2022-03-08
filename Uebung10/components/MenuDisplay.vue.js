
export default {
	template: `
<div>
  {{displayText}}
  <slot></slot>
</div>`,
  name: 'HelloWorld',
  props: {
    displayText: String
  }

}
