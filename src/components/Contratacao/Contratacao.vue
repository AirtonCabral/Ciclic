<template>
	<div id="contratacao">
		<Header></Header>
		<b-container>
			<b-row>
				<b-col class="celular">
					<img :src=cellphonesDetails.imageSrc
						class="samsung-s9">
				</b-col>
				<b-col class="box-infos">
					<div class="info-aparelho">
						<p class="seguro">
							Seguro para o aparelho:
						</p>
						<h1 class="aparelho">
							{{cellphonesDetails.name}}
						</h1>
					</div>
					<div class="cotacao">
						<p v-if="somenteRoubo" class="valor">{{cellphonesDetails.theftPrice}} <spam>por mês</spam></p>
						<p v-else class="valor">{{cellphonesDetails.completePrice}} <spam>por mês</spam></p>
						<v-checkbox
							label="Somente contra roubo"
              color="success"
              hide-details
							v-model="somenteRoubo" 
							@change="() => zeraParcelas()"></v-checkbox>
						<div class="md-layout-item">
							<v-select
								label="Opções de parcelamento"
								v-if="somenteRoubo"
								v-model="bleh"
								:items="parcialPayment"
								>
								<template slot="selection" slot-scope="data" >
									{{data.item.parcela}}x de R${{data.item.preco}}
								</template>
								<template slot="item" slot-scope="data" >
									{{data.item.parcela}}x de R${{data.item.preco}}
								</template>
							</v-select>
							<v-select
								v-else
								label="Opções de parcelamento"
								:items="fullPayment"
								v-model="bleh">
								<template slot="selection" slot-scope="data" >
									{{data.item.parcela}}x de R${{data.item.preco}}
								</template>
								<template slot="item" slot-scope="data" >
									{{data.item.parcela}}x de R${{data.item.preco}}
								</template>
							</v-select>
						</div>
						<b-button class="quero-proteger"
							:disabled="!bleh"
							@click="modalShow = !modalShow"
							pill variant='danger' size='lg'>QUERO PROTEGER AGORA</b-button>
					</div>
					<div class="cobertura">
						<p class="cobertura-contra">Você estará coberto contra:</p>
						<b-row class="wrapper">
							<b-col class='container-btns'>
								<b-button class="btn-cobertura" variant='success' size='lg'>
									<img src="~@/assets/svg/path.svg" class="Path">
									ROUBO
								</b-button>
							</b-col>
							<b-col class='container-btns'>
								<b-button
									class="btn-cobertura"
									:variant="[somenteRoubo ? 'outline-secondary' : 'success']" 
									size='lg'>
									<img v-if="somenteRoubo" src="~@/assets/svg/btn-close.svg" class="Path">
									<img v-else src="~@/assets/svg/path.svg" class="Path">
									QUEBRA
								</b-button>
							</b-col>
							<b-col class='container-btns'>
								<b-button 
									class="btn-cobertura" 
									:variant="[somenteRoubo ? 'outline-secondary' : 'success']" 
									size='lg'>
									<img v-if="somenteRoubo" src="~@/assets/svg/btn-close.svg" class="Path">
									<img v-else src="~@/assets/svg/path.svg" class="Path">
									LÍQUIDO
								</b-button>
							</b-col>
						</b-row>
						<p class="mais-informacoes">*Para mais informações, consulte as <spam>condições gerais</spam> do seguro e os riscos excluídos.</p>
					</div>
				</b-col>
			</b-row>
			<b-modal centered v-model="modalShow" hide-footer hide-top>
				<Login ></Login>
			</b-modal>
		</b-container>
	</div>
</template>

<script>
	import axios from 'axios'

	import Header from '../Header/Header';
	import Login from "../Login/Login";
	export default {
		name:'Contratacao',
		components: {
			Header,
			Login
		},
		data() {
			return {
				somenteRoubo: false,
				modalShow: true,
				modalForgetShow: false,
				uuid: '',
				cellphonesDetails: [],
				fullPayment: [],
				parcialPayment: [],
				bleh: null,
				index: 0
			}
		},
		mounted() {
			const urlParams = new URLSearchParams(window.location.search);
			this.uuid= urlParams.get('id');
			axios
				.get(`http://192.168.1.189:8080/cell-phone-insurance/v1/phones/${this.uuid}`)
				.then(response => {
					this.cellphonesDetails = response.data
					console.log(this.cellphonesDetails)
					this.cellphonesDetails.completePaymentOptions.map( (cell, index) => {
						return this.fullPayment.push({parcela: index+1, preco: cell})
					})

					this.cellphonesDetails.theftPaymentOptions.map( (cell, index) => {
						return this.parcialPayment.push({parcela: index+1, preco: cell})
					})

				})
		},
		methods: {
			zeraParcelas() {
				console.log(this.bleh)
				this.bleh = null
			}
		},

	}
</script>
<style src="./Contratacao.css"></style>