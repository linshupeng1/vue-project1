// import Vue from 'vue'
// require()

// 全局注册组件
// Vue.component('my-header', {
// 	template: '<p>this is my header</p>'
// 	data: {

// 	}
// });

// 局部注册组件
// var myHeaderChild = {
// 	template: '<p>this is my header child</p>',
// }
// var myHeader = {
// 	template: '<p><my-header-child></my-header-child> this is my header</p>',
// 	components: {
// 		'my-header-child': myHeaderChild
// 	},
// 	data: function(){
// 		return {
// 			f:1,
// 			d:2
// 		}
// 	}
// }
// new Vue({
// 	el: '#app',
// 	// template: '<p>hello world {{ word }}</p>',
// 	data: {
// 		word: 'hello world'
// 	},
// 	components: {
// 		'my-header': myHeader
// 	}
// });
import Vue from 'Vue';
import App from './App';
new Vue({
	el: '#app',
	render: function(h) {
		return h(App);
	}
});