<template>
    <div>
        <h1>Galpões Cadastrados</h1>

        <table border="1px">
            <thead>
                <th>Código</th>
                <th>Nome</th>
                <th>Sigla</th>
            </thead>
            <tbody>
                <tr v-for="w in warehouses" :key="w.code">
                    <td>{{ w.id }}</td>
                    <td>{{ w.name }}</td>
                    <td>{{ w.code }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'WareHouseList',

        data(){
            return {
                warehouses:[]
            }
        },

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

                // Adicionando os dados de result no array warehouses (data)
                this.warehouses = result;
                return this.warehouses;
            }
        }
    }
</script>

<style>

</style>