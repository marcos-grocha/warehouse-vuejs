<template>
    <div>
        <h1>Galpões Cadastrados</h1>

        <v-text-field label="Buscar galpão" v-model="term" class="my-5"></v-text-field>

        <v-card dark>
            <v-card-text>
                <WareHouseTable :warehouses="filterWareHouse"/>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    // Importar o componente warehouse
    import WareHouse from '@/components/Warehouse.vue';
    import WareHouseTable from '@/components/WareHouseTable.vue'

    export default {
        name: 'WareHouseList',
        components: {
            WareHouse,
            WareHouseTable
        },

        data(){
            return {
                warehouses:[],
                term: ""
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
        },

        computed: {
            filterWareHouse() {
                return this.warehouses.filter(w => {
                    return w.name.toLowerCase().includes(this.term.toLocaleLowerCase());
                })
            }
        }
    }
</script>

<style>
    .form {
        margin-bottom: 20px;
    }
</style>