<template>
		<b-container id='Vantagens'>
			<b-col sm=12 >
				<h1 class="vantagens-ciclic">
					Vantagens da Ciclic
				</h1>
				<p class="descricao-vantagens"> 
					Oferecemos a proteção que o seu celular precisa.Contrate agora, fique bem mais protegido.
				</p>
			</b-col>
			<b-row>
				<b-col class="card-vantagens">
					<img src="../../assets/svg/icone-protecao.svg" alt="" class="icone-protecao">
					<h1 class="title">Proteção mais completa</h1>
					<p class="descricao">Cobertura contra quedas, líquido e oxidação</p>
				</b-col>
				<b-col class="card-vantagens">
					<img src="../../assets/svg/icone-tempo.svg" alt="" class="icone-protecao">
					<h1 class="title">Entrega rápida direto em casa</h1>
					<p class="descricao">Em caso de troca, a entrega é rápida e feita na sua casa</p>
				</b-col>
				<b-col class="card-vantagens">
					<img src="../../assets/svg/icone-data.svg" alt="" class="icone-protecao">
					<h1 class="title">Elegibilidade de até 18 meses</h1>
					<p class="descricao">Proteja aparelhos com até 18 meses a partir da compra</p>
				</b-col>
				<b-col class="card-vantagens">
					<img src="../../assets/svg/icone-exterior.svg" alt="" class="icone-protecao">
					<h1 class="title">Cobertura internacional</h1>
					<p class="descricao">Proteção para aparelhos comprados no exterior</p>
				</b-col>
			</b-row>
			<b-row>
					<b-button
						class="conheca-cobertura"
						pill variant='danger' size='lg'>CONHEÇA A COBERTURA</b-button>
			</b-row>
		</b-container>
</template>
<script>
import './Vantagens.css'
export default {
	name: "Vantagens",
	data() {
		return {
			
		}
	},
	components: {
		
	},
};
</script>
