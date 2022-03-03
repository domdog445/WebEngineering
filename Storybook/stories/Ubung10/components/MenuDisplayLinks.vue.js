
export default {
	template: `
<div>
  <ul>
    <li v-for="link in Links" :key="link">
      <a :href="link">{{link}}</a>
    </li>
  </ul>
  <slot></slot>
</div>`,
  name: 'HelloWorld',
  props: {
    Links: String
  }

}
