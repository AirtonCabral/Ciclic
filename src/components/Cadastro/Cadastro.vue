<template>
    <div id="Cadastro">
        <Header></Header>
        <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
        <b-row>
            <b-col sm="12" md="6">
                <router-view></router-view>     
            </b-col>
            <b-col sm="12" md="6" class="detalhes-pedido">
                <div class="info-aparelho">
                    <p class="seguro">
                        Resumo do pedido
                    </p>
                    <h1 class="aparelho">
                        Samsung Galaxy J7 Prime SM-G610M 32GB
                    </h1>
                </div>
                <div class="cotacao">
                    <p class="valor">R$ 999,99 <spam class="bleh">por mês</spam></p>
                </div>
                <div class="pagamento">
                    <p>Pagamento: <spam>11x no cartão</spam> <br/>
                    Vigência do seguro: <spam>12 meses</spam></p>
                </div>
                <div class="cotacao">
                    <img src="../../assets/svg/icone-pdf.svg" class="icone-pdf"> Ver condições gerais do seu seguro
                </div>
                <b-row class="cotacao">
                    <b-col sm=6 >
                        <v-file-input label="File input"></v-file-input>
                    </b-col>
                    <b-col sm=6 >
                        <b-button class="quero-proteger"
                                pill variant='outline-danger'>ATIVAR</b-button>
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
                items: [
                {
                    text: '1- Dados Pessoais',
                    disabled: false,
                    href: 'dados-pessoais',
                },{
                    text: '2- Endereço',
                    disabled: true,
                    href: 'endereco',
                },{
                    text: '3- Pagamentos',
                    disabled: true,
                    href: 'pagamentos',
                }],
            }
        }
    }
</script>