<template>
  <div class="router">
    <router-link to="/">OptionsApi</router-link>
    <router-link to="/composition">CompositionApi</router-link>
  </div>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
<style>
  .router{
    display: flex;
    justify-content: center;
  }
  .contents{
    text-align: center;
  }

  .router > a{
    margin: 8px;
  }
</style>
