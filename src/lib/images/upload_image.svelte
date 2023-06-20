<script lang="ts">

    import {hikeService} from "../../services/hike_service.js";
    import type {Hike} from "../../services/hiking_types.ts";
    import {imageStore} from "../../stores.ts";
    import Error from "$lib/error_message.svelte";
    let imageInput;
    let message;
    export let hike: Hike;

    let imageInputString = "Choose a file…";
    const error_message = "Upload failed";
    const success_message = "Upload successful";

    async function uploadImage() {
        let success = await hikeService.uploadImage(hike._id, imageInput.files[0]);
        hike = await hikeService.getHike(hike._id);
        if (success) {
            message = success_message;
            imageStore.set(hike.img);
            imageInputString = "Choose a file…";
            imageInput.value = null;
        } else {
            message = (error_message);
        }
    }


</script>

<div class="card ">
    <div class="card-content">
        <form on:submit|preventDefault={uploadImage}>
            <div id="file-select" class="file has-name is-fullwidth">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume" accept="image/*" bind:this={imageInput} on:change={() => imageInputString=imageInput.files[0].name}>
                    <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label">
                            {imageInputString}
                          </span>
                     </span>
                    <span class="file-name"></span>
                </label>
                <button type="submit" class="button is-info">Upload</button>
            </div>
        </form>
    </div>
</div>


<Error bind:message={message} success_message={success_message} error_message={error_message} />