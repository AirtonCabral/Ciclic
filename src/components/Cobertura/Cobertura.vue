<template>
  <div id='Cobertura'>
      <b-container>
          <b-row>
						<h1 class="conheca-cobertura">
							Conheça as coberturas
            </h1>
            <p class="oferecemos-protecao"> 
							Oferecemos a proteção que o seu celular precisa. Contrate agora, fique bem mais protegido.
            </p>
					</b-row>
					<b-row>
						<b-col sm=4 class="cada-cobertura">
							<b-row>
								<b-col sm=3 class="icone-quebra">
									<img src="../../assets/svg/icone-quebra.svg" alt="icone quebra">
								</b-col>
								<b-col sm=9 class="descricao-quebra">
									<h3>Quebra</h3>
									Para danos acidentais, como a quebra da tela.
								</b-col>
							</b-row>
							<b-row class="seta">
								<img src="../../assets/svg/seta.svg" alt="seta">
							</b-row>
							<b-row>
								<b-col sm=3 class="icone-quebra">
									<img src="../../assets/svg/icone-liquido.svg" alt="icone quebra">
								</b-col>
								<b-col sm=9 class="descricao-passos">
									<h3>Liquido</h3>
									Caso o celular caia na água ou for danificado pela maresia.
								</b-col>
							</b-row>
							<b-row class="seta">
								<img src="../../assets/svg/seta.svg" alt="seta">
							</b-row>
							<b-row>
								<b-col sm=3 class="icone-quebra">
									<img src="../../assets/svg/icone-quebra.svg" alt="icone quebra">
								</b-col>
								<b-col sm=9 class="descricao-passos">
									<h3>Roubo</h3>
									Roubos mediante violência ou obstáculo para sua retirada.
								</b-col>
							</b-row>
							<b-row class="seta">
								<img src="../../assets/svg/seta.svg" alt="seta">
							</b-row>
						</b-col>
						<b-col sm=4 class="celular-vector">
							<b-col>
								<img src="../../assets/svg/frontal-white.svg" alt="icone quebra">
							</b-col>
						</b-col>
						<b-col sm=4 class="cansado-susto">
							<b-col>
								<h1>Cansado de sustos?</h1>
								<p>
									Oferecemos a proteção que o seu celular precisa. Contrate agora, fique bem mais protegido.
								</p>
								<b-button
									class="conheca-cobertura"
									pill variant='danger' size='lg'>COTAR AGORA</b-button>
							</b-col>
						</b-col>
					</b-row>
      </b-container>
  </div>
</template>

<script>
import './Cobertura.css'
export default {
	name: 'Cobertura',

}
</script>
