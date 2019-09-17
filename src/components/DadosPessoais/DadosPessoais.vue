<template>
    <div id="DadosPessoais">
        <h1 class="title">Dados Pessoais</h1>
        <b-row ref="form">
            <b-col sm=7 > 
                <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="nameRules"
                    label="Nome Completo"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=5 >
               <v-text-field
                    ref="nascimento"
                    v-model="nascimento"
                    :rules="nascimentoRules"
                    label="Data de Nascimento"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=5 > 
                <v-text-field
                    ref="celular"
                    v-model="celular"
                    :rules="celularRules"
                    @keyup="formatCelPhone(celular)"
                    label="Celular"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=7>
                <v-text-field
                    ref="CPF"
                    v-model="CPF"
                    :rules="CPFRules"
                    label="CPF"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=12>
                <v-text-field
                    ref="email"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=12>
               <b-button class="quero-proteger"
                pill block 
                variant='danger'
                @click="submit"> 
                    ATIVAR
                </b-button> 
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import './DadosPessoais.css'
    // import moment from 'moment'

    export default {
        nome: 'DadosPessoais',
        components:{},
        data() {
            return {
                name: '',
                nascimento: '',
                celular: '',
                CPF: '',
                email: '',
                nameRules: [ 
                    name => !!name ||  'Por favor, preencha esse campo',
                    name => name.length > 10 || 'O campo precisa ter no minimo 10 letras'
                ],
                nascimentoRules: [ 
                    nascimento => !!nascimento ||  'Por favor, preencha esse campo',
                    nascimento => nascimento.length > 9 || 'O campo precisa ter no minimo 8 letras',
                    // nascimento => this.formatDate(nascimento)
                ],
                celularRules: [
                    celular => !!celular ||  'Por favor, preencha esse campo',
                    celular => celular.length > 10 || 'O campo precisa ter no minimo 10 letras',
                    // celular => /.+@.+/.test(celular) || "Digite um número válido"
                ],
                CPFRules: [
                    CPF => !!CPF || 'Por favor, preencha esse campo'
                ],
                emailRules: [
                    email => !!email || "E-mail is required",
                    email => /.+@.+/.test(email) || "Digite um e-mail válido"
                ],
            }
        },

        computed: {
             form () {
                return {
                    name: this.name,
                    nascimento: this.nascimento,
                    celular: this.celular,
                    CPF: this.CPF,
                    email: this.email,
                }
            },

        },
        watch: {},
        methods: {
            submit () {
                debugger
                this.formHasErrors = false
                
                Object.keys(this.form).forEach(f => {
                    if (!this.form[f])  this.formHasErrors = true 
                        this.$refs[f].validate(true)
                        console.log(this.form)
                    })

                if( !this.formHasErrors ){ 
                    this.$router.push('cadastro/endereco')
                }
            },
        },
    }
</script>
