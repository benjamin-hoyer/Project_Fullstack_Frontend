<script lang="ts">
	import {
		currentTypeStore,
		activeCategoryStore,
		categoryStore,
		filteredHikeStore,
		hikeStore
	} from '../../stores.js';
	import Menu from '$lib/menus/menu.svelte';
	import Filter from '$lib/category_filter.svelte';
	import type { PageData } from './$types';
	import { analyticsUtils } from '../../services/analytics_utils.ts';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import type { ChartData } from '../../services/types.ts';
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import Chart from 'svelte-frappe-charts';

	export let chartTypes = ['bar', 'pie', 'percentage'];
	export let index = 0;

	function next() {
		index = (index + 1) % chartTypes.length;
		currentTypeStore.set(chartTypes[index]);
	}

	function previous() {
		index = (index - 1 + chartTypes.length) % chartTypes.length;
		currentTypeStore.set(chartTypes[index]);
	}

	export let data: PageData;
	let byDistance: ChartData;
	let byDuration: ChartData;
	let byDistancePercentage: ChartData;
	let byDurationPercentage: ChartData;

	hikeStore.set(data.hikes);
	filteredHikeStore.set(data.hikes);
	categoryStore.set(data.categories);

	function refreshChart() {
		let hikes = get(filteredHikeStore);
		byDistance = analyticsUtils.hikeDataDistance(hikes);
		byDuration = analyticsUtils.hikeDataDuration(hikes);
		byDistancePercentage = analyticsUtils.hikeDataDistancePercentage(hikes);
		byDurationPercentage = analyticsUtils.hikeDataDurationPercentage(hikes);
	}

	filteredHikeStore.subscribe(async () => {
		await refreshChart();
	});

	onMount(async () => {
		refreshChart();
	});
</script>

<Menu active="charts" />
<div style="margin-top: 20px; display: flex;  justify-content: space-between;">
	<div class="block" style=" display: flex">
		<h1 class="title is-2" style="margin: auto; color: #0078A8;">{$activeCategoryStore.name}</h1>
	</div>
	<Filter categories={$categoryStore} />
	<div />
</div>

{#if $currentTypeStore === 'bar'}
	<div class="box has-text-centered" style="width: 80%; margin: 0 auto 20px;">
		<h1 class="title is-4">Hike Kilometers</h1>
		<Chart data={byDistance} type="line" />
	</div>
	<div class="box has-text-centered" style="width: 80%; margin: 0 auto 20px;">
		<h1 class="title is-4">Hike Durations</h1>
		<Chart data={byDuration} type="line" />
	</div>
{:else if $currentTypeStore === 'pie'}
	<div class="box has-text-centered" style="width: 80%; margin: 0 auto 20px;">
		<h1 class="title is-4">Hike Kilometers</h1>
		<Chart data={byDistancePercentage} type="pie" />
	</div>
	<div class="box has-text-centered" style="width: 80%; margin: 0 auto 20px;">
		<h1 class="title is-4">Hike Durations</h1>
		<Chart data={byDurationPercentage} type="pie" />
	</div>
{:else if $currentTypeStore === 'percentage'}
	<div class="box has-text-centered" style="width: 80%; margin: 0 auto 20px;">
		<h1 class="title is-4">Hike Kilometers</h1>
		<Chart data={byDistancePercentage} type="percentage" />
	</div>
	<div class="box has-text-centered" style="width: 80%; margin: 0 auto 20px;">
		<h1 class="title is-4">Hike Durations</h1>
		<Chart data={byDurationPercentage} type="percentage" />
	</div>
{/if}
<div class="buttons is-centered">
	<button class="button is-link" on:click={previous}><i class="fa-solid fa-angle-left" /></button>
	<button class="button is-link" on:click={next}><i class="fa-solid fa-angle-right" /></button>
</div>
