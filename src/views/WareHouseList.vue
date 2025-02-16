<template>
    <div>
        <h1>Galpões Cadastrados</h1>

        <div v-for="w in warehouses" :key="w.id">
            <WareHouse
                :id = "w.id"
                :name = "w.name"
                :code = "w.code"
                :address = "w.address"
                :city = "w.city"
                :area = "w.area"
            />
        </div>
    </div>
</template>

<script>
    // Importar o componente warehouse
    import WareHouse from '@/components/Warehouse.vue';

    export default {
        name: 'WareHouseList',
        components: {
            WareHouse
        },

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