<script setup>
	import {ref, onMounted} from 'vue';
	const count = ref(0);
	
	function increment(){
		count.value++
	}
	onMounted(() => {
		console.log(`The inital count is ${count.value}.`);
	})
</script>
<template>
<div class="contents">
  <h3>Composition Api</h3>
  <button @click="increment">Count is: {{count}}</button>
</div>
</template>