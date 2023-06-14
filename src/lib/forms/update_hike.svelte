<script lang="ts">

    import type { Hike} from "../../services/hiking_types";
    import { hikeService } from "../../services/hike_service.ts";

    export let hike: Hike;
    let message = "";

    async function updateHike(){
        let success = await hikeService.updateHike(hike);
        if(success) {
            message = "Hike updated";
        } else {
            message = ("Hike update failed");
        }
    }


</script>


<form on:submit|preventDefault={updateHike}>
    <div class="field">
        <label class="label">Name
            <input class="input" type="text" bind:value="{hike.name}" name="name" >
        </label>
    </div>

    <p class="label">Start / End</p>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="text" bind:value="{hike.start}" name="start">
            </div>
            <div class="field">
                <input class="input" type="text" bind:value="{hike.end}" name="end">
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Description
        <input class="input" type="text" bind:value="{hike.description}" name="description"></label>
    </div>

    <div class="field">
        <label class="label">Duration in minutes
        <input class="input" type="text" bind:value="{hike.duration}" name="duration"></label>
    </div>
    <div class="field">
        <label class="label">Distance in km
            <input class="input" type="text" bind:value="{hike.distance}" name="distance">
        </label>
    </div>
    <label class="label">Latitude / Longitude</label>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="text" bind:value="{hike.lat}" name="lat">
            </div>
            <div class="field">
                <input class="input" type="text" bind:value="{hike.long}" name="long">
            </div>
        </div>
    </div>
    <label class="label">Latitude / Longitude (End)</label>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="text" bind:value="{hike.latend}" name="latend">
            </div>
            <div class="field">
                <input class="input" type="text" bind:value="{hike.longend}" name="longend">
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Visibility
        <input class="input" type="text" bind:value="{hike.visibility}" name="visibility"></label>
    </div>
        <button class="button is-primary">Update Hike</button>
</form>

{#if message === "Hike update failed"}
    <div class="section">
        <div class="message is-danger">
            <div class="message-body">
                {message}
                <button class="delete" on:click={() => message = null} style="margin-left: 70%"></button>
            </div>
        </div>
    </div>
    {:else if message === "Hike updated"}
    <div class="section">
        <div class="message is-success">
            <div class="message-body is-success">
                {message}
                <button class="delete" on:click={() => message = null} style="margin-left: 70%"></button>
            </div>
        </div>
    </div>
{/if}

