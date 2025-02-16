<template>
    <div>
        <h1>Cadastrar Galpão</h1>

        <div class="container">
            <div>{{ msg }}</div>
            <form v-on:submit.prevent>
                <div class="form">
                    <label for="">Nome: </label>
                    <input type="text" placeholder="Nome do Galpão" v-model="form.name">
                </div>
                <div class="form">
                    <label for="">Código: </label>
                    <input type="text" placeholder="Código do Galpão" v-model="form.code">
                </div>
                <div class="form">
                    <label for="">Endereço: </label>
                    <input type="text" placeholder="Endereço do Galpão" v-model="form.address">
                </div>
                <div class="form">
                    <label for="">Cidade: </label>
                    <input type="text" placeholder="Cidade" v-model="form.city">
                </div>
                <div class="form">
                    <label for="">CEP: </label>
                    <input type="text" placeholder="CEP" v-model="form.cep">
                </div>
                <div class="form">
                    <label for="">Área m²: </label>
                    <input type="number" v-model="form.area">
                </div>
                <div class="form">
                    <label for="">Descrição: </label>
                    <textarea cols="30" rows="5" v-model="form.description"></textarea>
                </div>
                <div class="form">
                    <button v-on:click="postWareHouse">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WareHouseNew',

        data() {
            return {
                msg: null,
                form: {
                    name: null,
                    code: null,
                    city: null,
                    address: null,
                    cep: null,
                    area: null,
                    description: null
                }
            }
        },

        methods: {
            async postWareHouse() {
                try {
                    await this.$http.post('http://localhost:3000/api/v1/warehouses', {
                    name: this.form.name,
                    code: this.form.code,
                    city: this.form.city,
                    address: this.form.address,
                    cep: this.form.cep,
                    area: this.form.area,
                    description: this.form.description
                    })
                    this.msg = "Cadastrado com sucesso!";
                } catch(error) {
                    this.msg = "Ops, tente novamente!";
                    console.log(error);
                }
            }
        }
    }
</script>

<style>
    .form {
        margin-bottom: 15px;
    }
    .form input {
        margin: 5px;
    }
</style>