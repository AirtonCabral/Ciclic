<template>
    <div id="Pagamentos">
        <h1 class="title">Forma de Pagamento</h1>
        <b-row>
            <b-col sm=12 > 
                <v-text-field
                    label="Nome como está o cartão"
                ></v-text-field>
            </b-col>
            <b-col sm=6 > 
                <v-text-field
                    label="Número do cartão"
                ></v-text-field>
            </b-col>
            <b-col sm=3 > 
                <v-text-field
                    label="Vencimento"
                ></v-text-field>
            </b-col>
            <b-col sm=3 > 
                <v-text-field
                    label="CVV"
                ></v-text-field>
            </b-col>
            <b-col sm=12>
                <v-checkbox 
                    label="Utilizar mesmo CPF do titular."
                    color="success"
                    hide-details ></v-checkbox>
            </b-col>
            <b-col sm=6 > 
                 <v-select
                    :items="parcelas"
                    label="Numero de parcelas"
                ></v-select>
            </b-col>
            <b-col sm=6 > 
                <v-text-field
                    label="CPF"
                ></v-text-field>
            </b-col>
            <b-col sm=12>
                <v-checkbox 
                    label="Estou ciente de que o seguro é válido apenas para aparelhos
com até 18 meses da data de compra, conforme Nota Fiscal.
IMPORTANTE: A Nota Fiscal ou recibo de compra no exterior deve estar em nome do titular do seguro. Quando este documento não estiver em nome do titular do seguro, haverá necessidade
do termo de doação."
                    color="success"
                    hide-details ></v-checkbox>
            </b-col> <br />
            <b-col sm=12>
               <b-button class="quero-proteger"
                pill block variant='danger'
                @click="goToPagamentos()"> 
                    PROTEGER AGORA
                </b-button> 
            </b-col>
            
        </b-row>
    </div>
</template>

<script>
    import './Pagamentos.css'
    export default {
        name: 'Pagamentos',
        data() {
            return {
                parcelas: [1,2,3,4,5,6,7,8,9,10, 11]
            }
        },
        methods: {
            goToEndereco() {
                window.location.href = window.location.href + '/pagamento'
            }
        }
    }
</script>