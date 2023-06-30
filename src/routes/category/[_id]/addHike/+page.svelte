<script lang="ts">
	import type { PageData } from './$types';
	import Menu from '$lib/menus/menu.svelte';
	import AddHike from '$lib/forms/add_hike.svelte';
	import { imageStore } from '../../../../stores.ts';
	import type { AddHikeType } from '../../../../services/types.ts';

	export let data: PageData;
	let hike: AddHikeType = {
		description: '',
		distance: 0,
		duration: 0,
		end: '',
		img: [],
		lat: 0,
		latend: 0,
		long: 0,
		longend: 0,
		name: '',
		start: '',
		visibility: ''
	};
	imageStore.set(hike.img);
	const category = data.category;
</script>

<Menu active="dashboard" />
<section class="section">
	<div class="title">
		{hike.name}
	</div>
	<div class="columns is-vcentered">
		<div class="column" style="margin: 0 auto auto">
			<AddHike {hike} {category} />
		</div>
		<div class="column">
			<figure class="Image">
				<img src="/hike_epic.jpg" alt="Not loading" />
			</figure>
		</div>
	</div>
</section>
