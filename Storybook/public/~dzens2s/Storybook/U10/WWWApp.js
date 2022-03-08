import MenuComp from '/U10/MenuComp.vue'
import wwwApp from '/U10/components/App.vue'
import MenuCompVue from '/U10/components/MenuComp.vue'

new Vue(
    {
        el:#appp,
        components:
        {
            'www-navigator': wwwApp,
            'Menu-Comp': MenuCompVue
        }
    });