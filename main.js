import Vue from 'vue'
import App from './App'
import cuCustom from 'colorui/components/cu-custom.vue'
import tabbar from "./component/tabbar.vue";
import list from "./component/list.vue";

Vue.component('list', list)
Vue.component('tabbar', tabbar)

Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
;
