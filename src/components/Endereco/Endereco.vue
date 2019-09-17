<template>
    <div id="Endereco">
        <h1 class="title">Endereço</h1>
        <b-row ref="form">
            <b-col sm=5 > 
                <v-text-field
                    label="CEP"
                    ref="CEP"
                    v-model="CEP"
                    :rules="[() => !!CEP || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=7 > 
                <v-text-field
                    label="Endereco"
                    ref="endereco"
                    v-model="endereco"
                    :rules="[() => !!endereco || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=5 > 
                <v-text-field
                    label="Número"
                    ref="numero"
                    v-model="numero"
                    :rules="[() => !!numero || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=7 > 
                <v-text-field
                    label="Complemento"
                    ref="complemento"
                    v-model="complemento"
                    :rules="[() => !!complemento || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=4 > 
                <v-text-field
                    label="Bairro"
                    ref="bairro"
                    v-model="bairro"
                    :rules="[() => !!bairro || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=4 > 
                <v-text-field
                    label="Cidade"
                    ref="cidade"
                    v-model="cidade"
                    :rules="[() => !!cidade || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=4 > 
                <v-text-field
                    label="Estado"
                    ref="estado"
                    v-model="estado"
                    :rules="[() => !!estado || 'Por favor, preencha esse campo']"
                    required
                ></v-text-field>
            </b-col>
            <b-col sm=12>
               <b-button class="quero-proteger"
                pill block variant='danger'
                @click="submit()"> 
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
                CEP: '',
                endereco: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: ''
            }
        },
        computed: {
            form () {
                return {
                    CEP: this.CEP,
                    endereco: this.endereco,
                    numero: this.numero,
                    complemento: this.complemento,
                    bairro: this.bairro,
                    cidade: this.cidade,
                    estado: this.estado
                }
            },
        },
        
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
                    this.$router.push('pagamento')
                }
            },
        }
    }
</script>