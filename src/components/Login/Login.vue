<template>
    <b-container id="modal-login">
        <b-col>
            <h2 class="faca-login">Faça seu login</h2>
            <p>Digite seu e-mail e senha para continuar</p>
        </b-col>
        <b-col >
            <v-form>
                <v-text-field
                    name='email'
                    v-model="email"
                    :rules="[emailRules.required, emailRules.email]"
                    label="E-mail"
                ></v-text-field>
                <v-text-field
                    name='password'
                    v-model="password"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    @click:append="show1 = !show1"
                ></v-text-field>
                <br/>
                <p>Esqueceu a sua senha?</p>
                <b-button class="quero-proteger" pill variant='danger' size='lg' @click="() => confirmLogin()">ENTRAR</b-button>
            </v-form>
        </b-col>
        <b-col class="last-col">
            <p class="sem-conta">Não tem uma conta? <spam>Cadastre-se</spam></p>
        </b-col>
    </b-container>
</template>

<script>
    import './Login.css'
    import axios from "axios";
    export default {
        name: 'Login',
        components: {},
        data() {
            return {
                email: '',
                password: '',
                show1: false,
                emailRules: {
                    required: value => !!value || 'Por favor, preencha este campo',
                    email: value => {
                            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            return pattern.test(value) || 'E-mail inválido.'
                        },
                },
                rules: {
                    required: value => !!value || 'Por favor, preencha este campo.',
                    min: v => v.length >= 8 || 'Mínimo de 8 catacteres',
                },
            }
        },
        mounted() {},
        methods: {
            confirmLogin() { 
                let data = {
                    email: "ricardo@ciclic.com.br",
                    password: "Ciclic@09"
                }

                let headers = { 'Content-Type': 'application/json' }

                axios.post('http://192.168.1.189:8080/cell-phone-insurance/v1/account/login', data, headers )
                    .then((response) => {
                        console.log(response)
                        window.location.href = window.location.origin + '/cadastro/dados-pessoais'
                    })
                    .catch( (error) => {
                        console.log(error)
                    })
            }
        },
        computed: {
        form () {
            return {
            email: this.email,
            password: this.password
            }
        },
    },
    }
</script>
