<script lang="ts">

    import type { Hike} from "../../services/hiking_types";
    import { hikeService } from "../../services/hike_service.ts";
    import Error from "$lib/error_message.svelte";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    export let hike: Hike;
    let message = "";
    let successMessage = "Hike updated";
    let errorMessage = "Hike update failed";

    async function updateHike(){
        let success = await hikeService.updateHike(hike);
        if(success) {
            message = successMessage;
            dispatch("hikeUpdated", hike)
        } else {
            message = errorMessage;
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
        <input class="input" type="number" bind:value="{hike.duration}" name="duration"></label>
    </div>
    <div class="field">
        <label class="label">Distance in km
            <input class="input" type="number" bind:value="{hike.distance}" name="distance">
        </label>
    </div>
    <label class="label">Latitude / Longitude</label>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="number" bind:value="{hike.lat}" name="lat">
            </div>
            <div class="field">
                <input class="input" type="number" bind:value="{hike.long}" name="long">
            </div>
        </div>
    </div>
    <label class="label">Latitude / Longitude (End)</label>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="number" bind:value="{hike.latend}" name="latend">
            </div>
            <div class="field">
                <input class="input" type="number" bind:value="{hike.longend}" name="longend">
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Visibility (public or private)
        <input class="input" type="text" bind:value="{hike.visibility}" name="visibility"></label>
    </div>
        <button class="button is-primary">Update Hike</button>
</form>

<Error bind:message={message} successMessage={successMessage} errorMessage={errorMessage} />

