<template>
    <b-container id='RedefinePassword'>
        <p class="titulo">Redefinir senha </p>
        <p class="texto">Informe o e-mail cadastrado que enviaremos o link para criar uma nova senha.</p>
        <v-form>
            <v-text-field
                name='email'
                v-model="email"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="Informe o seu email"
                @click:append="show1 = !show1"
            ></v-text-field>
            <br/>
            <b-button block class="quero-proteger"
                pill variant='danger' size='lg'>ENVIAR</b-button>
        </v-form>
    </b-container>
</template>

<script>
    export default {
        name:'RedefinePassword',
        components:  {},
        data() {
            return {
                show1: false,
                email: '',
                name:'',
                rules: {
                    required: value => !!value || 'Por favor, preencha este campo.',
                    min: v => v.length >= 8 || 'Mínimo de 8 catacteres',
                },
            }
        },
    }
</script>
<style src="./RedefinePassword.css"></style>
