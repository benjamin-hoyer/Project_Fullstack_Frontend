<script lang="ts">
	import type { PageData } from './$types';
	import Menu from '$lib/menus/menu.svelte';
	import UpdateHike from '$lib/forms/update_hike.svelte';
	import ImgCarousel from '$lib/images/image_carousel.svelte';
	import { userStore } from '../../../../../stores.ts';
	import { imageStore } from '../../../../../stores.ts';
	import UpdateHikeReadonly from '$lib/forms/update_hike_readonly.svelte';
	import Weather from '$lib/weather.svelte';
	import UploadImage from '$lib/images/upload_image.svelte';
	import { getWeather } from '../../../../../services/weather_utils.ts';
	import { onMount } from 'svelte';
	import type { WeatherType } from '../../../../../services/types.ts';

	export let data: PageData;
	let weather: WeatherType;
	const hike = data.hike;
	let index = 0;
	imageStore.set(hike.img);
	const category = data.category;
	onMount(async () => {
		weather = await getWeather(hike.lat, hike.long);
	});

	async function updateLatLong(event: any) {
		weather = await getWeather(event.detail.lat, event.detail.long);
	}
</script>

<Menu active="dashboard" />
<section class="section">
	<div class="title">
		{hike.name}
	</div>
	<div class="columns is-vcentered">
		<div class="column" style="margin: 0 auto auto">
			{#if $userStore._id === category.userid || $userStore.role === 'admin'}
				<UpdateHike {hike} on:hikeUpdated={updateLatLong} />
			{:else}
				<UpdateHikeReadonly {hike} />
			{/if}
		</div>
		<div class="column" style="margin: 0 auto auto">
			<ImgCarousel images={$imageStore} bind:index />
			{#if $userStore._id === category.userid || $userStore.role === 'admin'}
				<UploadImage {hike} bind:index />
			{/if}
		</div>
	</div>
	<Weather bind:weather />
</section>
