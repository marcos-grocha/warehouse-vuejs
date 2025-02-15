<template>
  <div id="app">
    <nav> <!-- Aqui cria links / rotas -->
      <!-- rota: Home -->
      <router-link to="/">Home</router-link> |
      <!-- rota: About -->
      <router-link to="/about">Sobre</router-link> |
      <router-link to="/warehouses">Galpões Cadastrados</router-link> |
      <router-link to="/warehouses/new">Cadastrar Galpão</router-link>
    </nav>

    <router-view/> <!-- Aqui carrega o conteúdo de forma dinâmica -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
