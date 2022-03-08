
export default {
	template: `
<div>
  <ul style= 'list-style-type: none; padding: 0;'>
    <li v-for="link in Links" :key="link" style='display: inline-block; margin: 0 10px;'>
      <a :href="link" style='color: #FFFFFF;'>{{link}}</a>
    </li>
  </ul>
  <slot></slot>
</div>`,
  name: 'HelloWorld',
  props: {
    Links: String
  }

}
