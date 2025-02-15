<template>
    <div>
        <h1>Galpões Cadastrados</h1>
        <button v-on:click="getWareHouse">Carregar dados</button>
    </div>
</template>

<script>
    export default {
        name: 'WareHouseList',
        methods: {
            async getWareHouse(){
                // Realizando a requisição
                const response = await this.$http.get('http://localhost:3000/api/v1/warehouses');

                // Expõe a resposta da requisição
                const result = await response.json();

                // Exibindo os dados no console do navegador
                console.log(result);
            }
        }
    }
</script>

<style>

</style>