<template>
    <div id="Endereco">
        <h1 class="title">Endereço</h1>
        <b-row>
            <b-col sm=5 > 
                <v-text-field
                    label="CEP"
                ></v-text-field>
            </b-col>
            <b-col sm=7 > 
                <v-text-field
                    label="Endereço"
                ></v-text-field>
            </b-col>
            <b-col sm=5 > 
                <v-text-field
                    label="Número"
                ></v-text-field>
            </b-col>
            <b-col sm=7 > 
                <v-text-field
                    label="Completemento"
                ></v-text-field>
            </b-col>
            <b-col sm=4 > 
                <v-text-field
                    label="Bairro"
                ></v-text-field>
            </b-col>
            <b-col sm=4 > 
                <v-text-field
                    label="Cidade"
                ></v-text-field>
            </b-col>
            <b-col sm=4 > 
                <v-text-field
                    label="Estado"
                ></v-text-field>
            </b-col>
            <b-col sm=12>
               <b-button class="quero-proteger"
                pill block variant='danger'
                @click="goToPagamentos()"> 
                    ATIVAR
                </b-button> 
            </b-col>
            
        </b-row>
    </div>
</template>

<script>
    import './Endereco.css'
    export default {
        name: 'Endereco',
        data() {
            return {
                
            }
        },
        methods: {
            goToEndereco() {
                window.location.href = window.location.href + '/pagamento'
            }
        }
    }
</script>