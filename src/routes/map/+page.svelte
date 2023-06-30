<script lang="ts">
	import Menu from '$lib/menus/menu.svelte';
	import LeafletMap from '$lib/maps/LeafletMap.svelte';
	import type { PageData } from './$types';
	import { getMarkerLayer, getMarkerLayerEnd } from '../../services/map_utils.ts';

	export let data: PageData;
</script>

<Menu active="map" />
<LeafletMap markerLayers={[getMarkerLayer(data.hikes), getMarkerLayerEnd(data.hikes)]} />
