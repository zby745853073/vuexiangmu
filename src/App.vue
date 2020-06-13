<template>
	<div id="app">
		<transition>
			<router-view></router-view>
		</transition>
		<FooterGuide></FooterGuide>
	</div>
</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide'
	export default {
		name: 'App',
		components: {
			FooterGuide
		}
	}
</script>

<style>
	#app {
		/* padding:2.5rem  0; */
		overflow-x: hidden;
	}

	.active {
		color: red;
	}

	.v-enter {
		opacity: 0;
		transform: translateX(-100%);
		/* position: absolute; */
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: .5s;
		/* position: absolute;
		top: 0; */
	}
</style>
