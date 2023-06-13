<script lang="ts">

    import {hikeService} from "../../services/hike_service.js";
    import type {Hike} from "../../services/hiking_types.ts";
    import {imageStore} from "../../stores.ts";
    let imageinput;
    let message;
    export let hike: Hike;

    async function uploadImage() {
        let success = await hikeService.uploadImage(hike._id, imageinput.files[0]);
        hike = await hikeService.getHike(hike._id);
        if (success) {
            message = "Upload successful";
            imageStore.set(hike.img);
        } else {
            message = ("Upload failed");
        }
    }

</script>

<div class="card ">
    <div class="card-content">
        <form on:submit|preventDefault={uploadImage}>
            <div id="file-select" class="file has-name is-fullwidth">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume" accept="image/*" bind:this={imageinput}>
                    <span class="file-cta">
                          <span class="file-icon">
                            <i class="fas fa-upload"></i>
                          </span>
                          <span class="file-label">
                            Choose a file…
                          </span>
                     </span>
                    <span class="file-name"></span>
                </label>
                <button type="submit" class="button is-info">Upload</button>
            </div>
        </form>
    </div>
</div>


{#if message === "Upload failed"}
    <div class="section">
        <div class="message is-danger">
            <div class="message-body">
                {message}
                <button class="delete" on:click={() => message = null} style="margin-left: 60%"></button>
            </div>
        </div>
    </div>
{:else if message === "Upload successful"}
    <div class="section">
        <div class="message is-success">
            <div class="message-body">
                {message}
                <button class="delete" on:click={() => message = null} style="margin-left: 60%"></button>
            </div>
        </div>
    </div>
{/if}
