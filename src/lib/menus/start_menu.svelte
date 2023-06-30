<script type="ts">
	import HikingBrand from '../images/hiking_brand.svelte';
	let is_active = false;
	export let active = '';
</script>

<nav class="navbar is-link">
	<div class="navbar-brand" style="padding-left: 5%">
		<HikingBrand />
		<div
			style="background-color: cornflowerblue; margin: 2% 5% auto auto"
			class="navbar-burger"
			on:click={() => (is_active = !is_active)}
			on:keydown
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</div>
	</div>

	<div class="navbar-menu" class:is-active={is_active} id="navMenu">
		<div class="navbar-end" style="margin-right: 5%">
			<div class="navbar-item">
				<a class="button is-dark" id="allHikes" href="/" class:is-info={active === 'allhikes'}>
					All public Hikes</a
				>
			</div>
			<div class="navbar-item">
				<a class="button is-dark" id="login" href="/login" class:is-info={active === 'login'}>
					Log in
				</a>
			</div>
			<div class="navbar-item">
				<a class="button is-dark" id="signup" href="/signup" class:is-info={active === 'signup'}>
					Sign up
				</a>
			</div>
		</div>
	</div>
</nav>
