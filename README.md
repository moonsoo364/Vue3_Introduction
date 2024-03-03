# Vue3 Introduction

## Single File Component (SFC)
`.vue` 파일 내부에서 컴포넌트의 로직(js), 템플릿(HTML) 및 스타일(CSS)을 단일 파일에서 사용한다.
```
<script setup>
import {ref} from 'vue';
const count = ref(0)
</script>
<template>
	<button @click="count++">Count is {{ count }}</button>
</template>
<style scoped>
	.button{
		front-weight: bold;
	}
</style>
```
## API Style
Vue 컴포넌트에서는 두 스타일의 API를 제공한다.
- Options API
- Composition API

### Options API
Options API 에서는 컴포넌트의 로직을 `data`, `methods`, `mounted` 와 같은  options 객체를 이용하여 정의합니다. 속성들은 options에 의해 정의되고 `this` 를 통해 사용가능합니다.
```
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
      <button @click="increment">increment > Count is: {{count}}</button>
  </div>
</template>
```
### Composition API
컴포지션 API를 사용하면 가져온 API 함수를 사용하여 컴포넌트의 로직을 정의할 수 있습니다. SFC에서 컴포지션 API는 일반적으로 <script setup> 과 함께 사용됩니다. setup 속성은 Vue가 컴파일 타임 변환을 수행하여 상용구가 적은 Composition API를 사용할 수 있도록 하는 힌트입니다.
```
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
	<button @click="increment">Count is: {{count}}</button>
</template>
```
## Which to Choose
Options API 는 “Component Instance” 라는 개념을 중심으로 합니다. 일반적으로 OOP 언어 배경을 가진 클래스 기반 모델에 잘 부합합니다. 또한 세부 사항을 추상화하고 옵션 그룹을 통해 코드 구성을 제공함으로써 초보자도 쉽게 사용할 수 있습니다.

Composition API는 함수 범위에서 직접 반응형 상태 변수를 선언하고 여러 함수의 상태를 함께 컴포지션하여 복잡성을 처리하는 데 중점을 두고 있습니다. 보다 자유로운 형식이며 효과적으로 사용하려면 Vue에서 반응성이 어떻게 작동하는 지에 대한 이해가 필요합니다. 그 대신 유연성을 제공하여 더 강력한 패턴을 사용할 수 있습니다.
