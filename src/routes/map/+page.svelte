<script lang="ts">
	import Menu from "$lib/menus/menu.svelte";
	import LeafletMap from "$lib/maps/LeafletMap.svelte";
	import type { PageData } from "./$types";
    import { onMount } from "svelte";
    import {getMarkerLayer, getMarkerLayerEnd} from "../../services/utils.ts";

    let hikingMarkerLayer;
    let hikingMarkerLayerEnd;
    let map: LeafletMap;export let data: PageData;

    onMount(async () => {
        hikingMarkerLayer = getMarkerLayer(data.hikes);
        hikingMarkerLayerEnd = getMarkerLayerEnd(data.hikes);
        map.populateLayer(hikingMarkerLayer, hikingMarkerLayerEnd);
    });

</script>

<Menu active="map"/>
<LeafletMap bind:this={map} />
