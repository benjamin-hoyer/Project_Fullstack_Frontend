<script lang="ts">
	import HikeImg from '$lib/images/hike_card_carousel.svelte';
	import { currentImageStore } from '../../stores.ts';

	export let index = 0;
	export let images: string[];

	function next() {
		index = (index + 1) % images.length;
		currentImageStore.set(images[index]);
	}

	function previous() {
		index = (index - 1 + images.length) % images.length;
		currentImageStore.set(images[index]);
	}
</script>

<div class="container">
	<div class="box">
		<HikeImg hikeImg={$currentImageStore} />
		<div class="columns is-centered">
			{#each images as image, i}
				{#if i === index}
					<span class="icon"> <i class="fa-solid fa-circle" /> </span>
				{:else}
					<span class="icon"> <i class="fa-regular fa-circle" /> </span>
				{/if}
			{/each}
		</div>
		<div class="buttons is-centered">
			<button class="button is-link" on:click={previous}>
				<i class="fa-solid fa-angle-left" /></button
			>
			<button class="button is-link" on:click={next}><i class="fa-solid fa-angle-right" /></button>
		</div>
	</div>
</div>
