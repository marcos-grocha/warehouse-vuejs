<template>
    <div>
        <h1>Galpões Cadastrados</h1>
    </div>
</template>

<script>
    export default {
        name: 'WareHouseList',
        async mounted(){
            this.getWareHouses();
        },
        methods: {
            async getWareHouses(){
                // Realizando a requisição
                const response = await this.$http.get('http://localhost:3000/api/v1/warehouses');

                // Transforma a resposta da requisição em JSON
                const result = await response.json();

                // Exibindo os dados no console do navegador
                console.log(result);
            }
        }
    }
</script>

<style>

</style>