<script lang="ts">
	import type { AddHikeType, Category } from '../../services/types.ts';
	import { hikeService } from '../../services/hike_service.ts';
	import Error from '$lib/error_message.svelte';
	import { goto } from '$app/navigation';

	export let hike: AddHikeType;
	export let category: Category;
	let message = '';
	let successMessage = 'Hike added successfully';
	let errorMessage = 'Hike upload failed';

	async function addHike() {
		let success = await hikeService.addHike(hike, category._id);
		if (success) {
			message = successMessage;
			goto('/dashboard');
		} else {
			message = errorMessage;
		}
	}
</script>

<form on:submit|preventDefault={addHike}>
	<div class="field">
		<label class="label"
			>Name
			<input class="input" type="text" bind:value={hike.name} name="name" />
		</label>
	</div>

	<p class="label">Start / End</p>
	<div class="field is-horizontal">
		<div class="field-body">
			<div class="field">
				<input class="input" type="text" bind:value={hike.start} name="start" />
			</div>
			<div class="field">
				<input class="input" type="text" bind:value={hike.end} name="end" />
			</div>
		</div>
	</div>
	<div class="field">
		<label class="label"
			>Description
			<input class="input" type="text" bind:value={hike.description} name="description" /></label
		>
	</div>

	<div class="field">
		<label class="label"
			>Duration in minutes
			<input class="input" type="number" step="any" bind:value={hike.duration} name="duration" /></label
		>
	</div>
	<div class="field">
		<label class="label"
			>Distance in km
			<input class="input" type="number" step="any" bind:value={hike.distance} name="distance" />
		</label>
	</div>
	<p class="label">Latitude / Longitude</p>
	<div class="field is-horizontal">
		<div class="field-body">
			<div class="field">
				<input class="input" type="number" step="any" bind:value={hike.lat} name="lat" />
			</div>
			<div class="field">
				<input class="input" type="number" step="any" bind:value={hike.long} name="long" />
			</div>
		</div>
	</div>
	<p class="label">Latitude / Longitude (End)</p>
	<div class="field is-horizontal">
		<div class="field-body">
			<div class="field">
				<input class="input" type="number" step="any" bind:value={hike.latend} name="latend" />
			</div>
			<div class="field">
				<input class="input" type="number" step="any" bind:value={hike.longend} name="longend" />
			</div>
		</div>
	</div>
	<div class="field">
		<label class="label"
			>Visibility (public or private)
			<input class="input" type="text" bind:value={hike.visibility} name="visibility" /></label
		>
	</div>
	<button class="button is-primary">Add Hike</button>
</form>

<Error bind:message {successMessage} {errorMessage} />
