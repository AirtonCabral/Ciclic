<template>
	<div id="home">
		<Header>
		</Header>
		<b-row class="wrapper">
			<b-container class="chamada-cotacao">
				<b-col cols="6" >
					<p class="celular-protegid">
						Seu celular protegido por quem se importa
					</p>
					<p class="oferecemos">
						Oferecemos a proteção que eles precisam. Informe abaixo o modelo do seu celular e faça seu seguro agora:
					</p>
					<v-autocomplete
						v-model="selectedCellphone"
						placeholder="Ex: Iphone 8"
						:items="cellphones"
						item-text="name"
						item-value="uuid">
					</v-autocomplete>
					<b-button
						@click="callNextPage()"
						class="cotar-agora"
						pill variant='danger' size='lg'>COTAR AGORA</b-button>
				</b-col>
			</b-container>
		</b-row>
		<StripBB />
		<Vantagens />
		<ComoFunciona />
		<Cobertura />
	</div>
</template>

<script>
	import axios from 'axios'

	import Header from '../Header/Header';
	import StripBB from '../StripBB/SripBB';
	import Vantagens from "../Vantagens/Vantagens";
	import ComoFunciona from "../ComoFunciona/ComoFunciona";
	import Cobertura from "../Cobertura/Cobertura";

	export default {
		name: 'Home',
		components: {
			Header,
			StripBB,
			Vantagens,
			ComoFunciona,
			Cobertura
		},
		props: {},
		data: () => {
			return {
				selectedCellphone: null,
				cellphones: [
					{ uuid: '531c1770-cf1c-11e9-bb65-2a2ae2dbcce4' , name: 'Samsung Galaxy J7 Prime SM-G¨610M 32GB'}
				],
			}
		},
		mounted () {
			axios
				.get('http://192.168.1.189:8080/cell-phone-insurance/v1/phones?query=%20')
				.then(response => {
					this.cellphones = response.data
				})
		},
		methods: {
			callNextPage() {
				if(this.selectedCellphone){
					this.$router.push({ path: 'contratacao', query: { id: this.selectedCellphone }})
				}else {
					alert('Preencha o campo e escolha o seu cellular...')
				}	
				// 
			}
		},
	}
	
</script>

<style src="./Home.css"></style>