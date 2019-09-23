<template>
    <div id="Cadastro">
        <Header></Header>
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
        <b-row>
            <b-col sm="12" md="6" class="area-dados">
                <router-view></router-view>     
            </b-col>
            <b-col sm="12" md="6" class="detalhes-pedido">
                <div class="info-aparelho">
                    <p class="seguro">
                        Resumo do pedido
                    </p>
                    <h1 class="aparelho">
                        {{cellphone.nome}}
                    </h1>
                </div>
                <div class="cotacao">
                    <p class="valor">R$ {{cellphone.preco}} <spam class="bleh">por mês</spam></p>
                </div>
                <div class="pagamento">
                    <p>Pagamento: <spam>{{cellphone.parcela}}x no cartão</spam> <br/>
                    Vigência do seguro: <spam>12 meses</spam></p>
                </div>
                <div class="cotacao">
                    <img src="../../assets/svg/icone-pdf.svg" class="icone-pdf"> Ver condições gerais do seu seguro
                </div>
                <b-row class="codigo-promocional">
                    <b-col sm=8 >
                        <v-file-input label="Código Promocional"></v-file-input>
                    </b-col>
                    <b-col sm=4 >
                        <b-button class="quero-proteger"
                            block pill variant='outline-danger'>ATIVAR</b-button>
                    </b-col>
                </b-row>      
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Header from "../Header/Header";
    import './Cadastro.css'
    export default {
        nome: 'Cadastro',
        components:{
            Header
        },
        data() {
            return {
                cellphone: {},
                items: [
                {
                    text: '1- Dados Pessoais',
                    disabled: false,
                    href: 'cadastro',
                },{
                    text: '2- Endereço',
                    disabled: true,
                    href: 'endereco',
                },{
                    text: '3- Pagamentos',
                    disabled: true,
                    href: 'pagamentos',
                }]
            }
        },
        mounted() {
            this.cellphone = JSON.parse(sessionStorage.getItem('cellphone'))
            if(!this.cellphone){
                this.$router.push('contratacao')
            }
        },
        methods: {
            dadosPessoaisCustomer() {
            }
        },
    }
</script>