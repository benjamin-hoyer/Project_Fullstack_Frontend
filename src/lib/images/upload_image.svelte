<script lang="ts">
	import { hikeService } from '../../services/hike_service.js';
	import type { Hike } from '../../services/types.ts';
	import { imageStore, currentImageStore } from '../../stores.ts';
	import Error from '$lib/error_message.svelte';

	let imageInput: HTMLInputElement;
	let message: string;
	export let hike: Hike;

	let imageInputString = 'Choose a file…';
	const errorMessage = 'Upload failed';
	const successMessage = 'Upload successful';
	export let index = 0;

	async function uploadImage() {
		if (!imageInput.files) {
			message = errorMessage;
			return;
		}
		let success = await hikeService.uploadImage(hike._id, imageInput.files[0]);
		hike = await hikeService.getHike(hike._id);
		if (success) {
			message = successMessage;
			imageStore.set(hike.img);
			currentImageStore.set(hike.img[hike.img.length - 1]);
			index = hike.img.length - 1;
			imageInputString = 'Choose a file…';
			imageInput.value = '';
		} else {
			message = errorMessage;
		}
	}
</script>

<div class="card">
	<div class="card-content">
		<form on:submit|preventDefault={uploadImage}>
			<div id="file-select" class="file has-name is-fullwidth">
				<label class="file-label">
					<input
						class="file-input"
						type="file"
						name="resume"
						accept="image/*"
						bind:this={imageInput}
						on:change={() => {
							if (imageInput.files) {
								imageInputString = imageInput.files[0].name;
							}
						}}
					/>
					<span class="file-cta">
						<span class="file-icon">
							<i class="fas fa-upload" />
						</span>
						<span class="file-label">
							{imageInputString}
						</span>
					</span>
					<span class="file-name" />
				</label>
				<button type="submit" class="button is-info">Upload</button>
			</div>
		</form>
	</div>
</div>

<Error bind:message {successMessage} {errorMessage} />
