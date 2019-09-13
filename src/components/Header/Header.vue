<template>
    <div id='header'>
		<b-navbar toggleable="lg" 
				type="dark" 
				:variant="changeHeader ? 'info' : 'info-positivo'">
			<b-container>
				<router-link to="/" >
					<b-navbar-brand 
						:class="[ changeHeader ? 'ciclic-negativo' : 'ciclic-positivo']" >
					</b-navbar-brand>
				</router-link>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
					<b-collapse id="nav-collapse" is-nav right>
						<b-navbar-nav class="ml-auto">
							<b-navbar-nav right>
								<b-nav-item :class="[ changeHeader ? 'menuItem' : 'menuItem-positivo']" href="#">Quem somos</b-nav-item>
								<b-nav-item :class="[ changeHeader ? 'menuItem' : 'menuItem-positivo']" href="#">Como funciona</b-nav-item>
								<b-nav-item :class="[ changeHeader ? 'menuItem' : 'menuItem-positivo']" href="#">Cobertura</b-nav-item>
								<b-nav-item :class="[ changeHeader ? 'menuItem' : 'menuItem-positivo']" href="#">Diferenciais</b-nav-item>
								<b-nav-item :class="[ changeHeader ? 'menuItem' : 'menuItem-positivo']" href="#">FAQ</b-nav-item>
							</b-navbar-nav>
						</b-navbar-nav>
					</b-collapse>
			</b-container>
		</b-navbar>
    </div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				changeHeader: false
			}
		},
		mounted() {
			this.checkUrl();
		},
		methods: {
			checkUrl(){ 
				if(window.location.pathname === '/'){
					this.changeHeader = true
				} else {
					this.changeHeader = false
				}
			}
		},
	}
</script>
<style src="./Header.css"></style>