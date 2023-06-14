<script lang="ts">

    import type { Hike} from "../../services/hiking_types";

    export let hike: Hike;


</script>


<div class="box" >
    <div class="field">
        <label class="label">Name
            <input class="input" type="text" value="{hike.name}" name="name" readonly>
        </label>
    </div>
    <p class="label">Start / End</p>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="text" value="{hike.start}" name="start" readonly>
            </div>
            <div class="field">
                <input class="input" type="text" value="{hike.end}" name="end" readonly>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Description
        <input class="input" type="text" value="{hike.description}" name="description" readonly></label>
    </div>

    <div class="field">
        <label class="label">Duration in minutes
        <input class="input" type="text" value="{hike.duration}" name="duration" readonly></label>
    </div>
    <div class="field">
        <label class="label">Distance in km
            <input class="input" type="text" value="{hike.distance}" name="distance" readonly>
        </label>
    </div>
    <p class="label">Latitude / Longitude</p>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="text" value="{hike.lat}" name="lat" readonly>
            </div>
            <div class="field">
                <input class="input" type="text" value="{hike.long}" name="long" readonly>
            </div>
        </div>
    </div>
    <label class="label">Latitude / Longitude (End)</label>
    <div class="field is-horizontal">
        <div class="field-body">
            <div class="field">
                <input class="input" type="text" value="{hike.latend}" name="latend" readonly>
            </div>
            <div class="field">
                <input class="input" type="text" value="{hike.longend}" name="longend" readonly>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Visibility
        <input class="input" type="text" value="{hike.visibility}" name="visibility" readonly></label>
    </div>
    <p style="color: cornflowerblue; font-size: x-large">You can only update an Hike, you created! </p>
</div>
