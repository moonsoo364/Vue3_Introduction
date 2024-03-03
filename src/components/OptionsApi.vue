<script>
	export default {
		data(){
        return{
          count: 0
        }
			},
			methods: {
				increment(){
					this.count++;
				}
			},
			mounted(){
				console.log(`The initial count id ${this.count}`);
			}
		}
</script>
<template>
  <div class="contents">
      <h3>Options Api</h3>
      <button @click="increment">Count is: {{count}}</button>
  </div>
</template>