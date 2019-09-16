<template>
    <div id="DadosPessoais">
        <h1 class="title">Dados Pessoais</h1>
        <b-row>
            <b-col sm=7 > 
                <v-text-field
                    label="Nome Completo"
                ></v-text-field>
            </b-col>
            <b-col sm=5 >
                <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    full-width
                    max-width="290px"
                    min-width="290px"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        v-model="dateFormatted"
                        label="Date"
                        persistent-hint
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                    </v-menu>
            </b-col>
            <b-col sm=5 > 
                <v-text-field
                    label="Celular"
                ></v-text-field>
            </b-col>
            <b-col sm=7>
                <v-text-field
                    label="CPF"
                ></v-text-field>
            </b-col>
            <b-col sm=12>
                <v-text-field
                    label="E-mail"
                ></v-text-field>
            </b-col>
            <b-col sm=12>
               <b-button class="quero-proteger"
                pill block variant='danger'
                @click="goToEndereco()"> 
                    ATIVAR
                </b-button> 
            </b-col>
            
        </b-row>
    </div>
</template>

<script>
    import './DadosPessoais.css'
    export default {
        nome: 'DadosPessoais',
        components:{},
        data: vm => ({
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
            menu2: false,
        }),

        computed: {
            computedDateFormatted () {
                return this.formatDate(this.date)
            },
        },

        watch: {
            date (val) {
                this.dateFormatted = this.formatDate(this.date)
            },
        },

        methods: {
        formatDate (date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate (date) {
            if (!date) return null

            const [day, month, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        goToEndereco() {
            window.location.href = window.location.href + '/endereco'
        }
        },
    }
</script>
