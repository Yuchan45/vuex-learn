<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<div :style="{ color: $store.state.colorCode }" class="counter">
			{{ $store.state.counter }}
		</div>
		<div class="counter-squared">
			{{ $store.state.counter }} 
			<sup>2</sup> = 
			{{ $store.getters.counterSquared }}
		</div>
		<div class="buttons">
			<button @click="$store.dispatch('decreaseCounter')">-</button>
			<button @click="$store.dispatch('increaseCounter')">+</button>
		</div>
		<div>
			<input 
				placeholder="Enter color code" 
				type="text"
				v-model="colorCode"
			>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: 'HomeView',
		computed: {
			colorCode: {
				get() {
					return this.$store.state.colorCode
				},
				set(newValue) {
					this.$store.dispatch('setColorCode', newValue);
				}
			}
		}

	}
</script>


<style>
	div {
		margin-bottom: 10px;
	}

	.counter {
		font-size: 80px;
	}

	.buttons button {
		font-size: 40px;
		width: 100px;
		margin: 0 10px;
	}


</style>