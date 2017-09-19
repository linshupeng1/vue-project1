<template>
	<div>
		{{hello}}
		{{numberToDo}}
		{{myValue}}
		<button @click='emitEvent'>emit</button>
	</div>
</template>

<script>
	export default {
		props: {
			'number-to-do': [Number,String],
			'my-value': [Number,String]
		},
		data() {
			return {
				hello: 'i am component a '
			}
		},
		methods: {
			emitEvent(){
				this.$emit('my-event',this.hello);
				console.log(this.numberToDo);
			}
		}
	}
</script>

<style scoped>
		
</style>