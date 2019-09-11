<template>
    <b-container id="modal-login">
        <b-col>
            <h2>Faça seu login</h2>
            <p>Digite seu e-mail e senha para continuar</p>
        </b-col>
        <b-col >
            <v-form>
                <v-text-field
                    name='email'
                    v-model="email"
                    :rules="[emailRules.required, emailRules.email]"
                    :error-messages="errorMessages"
                    label="E-mail"
                ></v-text-field>
                <v-text-field
                    name='password'
                    v-model="password"
                    :rules="[rules.required, rules.min]"
                    :error-messages="errorMessages"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    @click:append="show1 = !show1"
                ></v-text-field>
                <br/>
                <p>Esqueceu a sua senha?</p>
                <b-button class="quero-proteger" pill variant='danger' size='lg' @click="submit">ENTRAR</b-button>
            </v-form>
        </b-col>
        <b-col class="last-col">
            <p class="sem-conta">Não tem uma conta? <spam>Cadastre-se</spam></p>
        </b-col>
    </b-container>
</template>

<script>
    import './Login.css'
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
            enviarParaPai () {  this.$emit('handleForgetUser', { modalForgetShow: true, modalShow: false}) }
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

<style lang="scss" scoped>

</style>