<template>
	<div>
		{{hello}}
		<button @click='emitEvent'>emit</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hello: 'i am component a '
			}
		},
		methods: {
			emitEvent(){
				this.$emit('my-event',this.hello);
			}
		}
	}
</script>

<style scoped>
		
</style>