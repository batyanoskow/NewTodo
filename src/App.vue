<template>
  <div class="wrapper">
    <HeaderVue />
    <router-view />
  </div>
 
</template>
<script>
  import HeaderVue from './components/Header.vue';

  export default { 
    name : "MainApp",
    components : { 
      HeaderVue
    },
  
  }
</script>
<style lang="scss">
  // [class*="__container"] {
  //   max-width: calc(1320px + 2rem);
  //   margin: 0 auto;
  //   padding: 0 2rem;
  // }
</style>
