<script setup>
 
  import Toolbar from "./components/Toolbar.vue";
  import Footer from "./components/Footer.vue";
  
</script>

<template>
  <Toolbar msg="You did it!" />
  <router-view />
  <Footer/>
</template>
