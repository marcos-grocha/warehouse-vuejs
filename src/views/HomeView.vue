 
<template> <!-- Parte HTML -->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Seja bem-vindo" title="marcos-grocha"/>
  </div>
</template>

<script> // Parte da lógica / JS
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style> /* Parte da estilização do componente */

</style>