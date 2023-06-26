<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import L from 'leaflet';
    import  {LatLng, type Control, type Layer, type LayerGroup, type Map as LeafletMap, type Marker} from "leaflet";
    import type {MarkerLayer, MarkerSpec} from "../../services/markers";
    import {markerSelected} from "../../stores";

    export let id = "home-map-id";
    export let height = 80;
    export let location = {lat: 48.2734, lng: 11.7783203};
    export let zoom = 6;
    export let minZoom = 4;
    export let activeLayer = "Terrain";


    let imap: LeafletMap;
    let control: Control.Layers;
    let overlays: Control.LayersObject = {};
    let markerMap = new Map<Marker, MarkerSpec>();
    export let marker: MarkerSpec = {
        categoryid: "", img: "", popup: false,
        id: "",
        title: "",
        location: new LatLng(0, 0)
    };
    export let markerLayers: MarkerLayer[] = [];

    let baseLayers: any = {
        Terrain: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 17,
            attribution:
                'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }),
        Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        })
    };
    let polyLine: [LatLng] | [] = [];
    let polyLineEnd: [LatLng] | [] = [];

    onMount(async () => {

        let defaultLayer = baseLayers[activeLayer];

        imap = L.map(id, {
            center: [location.lat, location.lng],
            zoom: zoom,
            minZoom: minZoom,
            layers: [defaultLayer]
        });
        addControl();
        if (marker.id) {
            addPopupMarkerAndZoom("default", marker);
        }
        if (markerLayers) {
            populateLayer(markerLayers[0]);
            populateLayer(markerLayers[1]);
            drawPolyLines();
        }
    });
    onDestroy(() => {
        if(imap)
        imap.remove();
    });

    export function addPopupMarkerAndZoom(layer: string, marker: MarkerSpec) {
        if (imap) {
            addPopup(layer, marker.title, marker.img, marker.location);
            moveTo(marker.location, 15);
            invalidateSize();
        }
    }

    function drawPolyLines() {
        let group = L.layerGroup([]);

        for (let i = 0; i < polyLine.length; i++) {
             let polyline = L.polyline( [polyLine[i], polyLineEnd[i]],{color: 'red'}).addTo(imap);
            polyline.addTo(group)
        }
        addLayer("Route", group);
        control.addOverlay(group, "Route");
    }

    export function populateLayer(markerLayer: MarkerLayer) {
        let group = L.layerGroup([]);
        markerLayer.markerSpecs.forEach((markerSpec) => {
            let marker = L.marker([markerSpec.location.lat, markerSpec.location.lng]);
            const newPopup = L.popup({autoClose: false, closeOnClick: false});
            if (markerSpec.popup) {
                const imgString = "<figure class=\"image is4by3\"><img src='" + markerSpec.img + "' width='100%' alt='not found'/></figure>"
                const link = "<a class='subtitle is-6' href='category/" + markerSpec.categoryid + "/hike/"+ markerSpec.id +"'>" + markerSpec.title + "</a>"
                newPopup.setContent(link + imgString);
            }
            marker.bindPopup(newPopup);
            marker.bindTooltip(markerSpec.title);
            marker.addTo(group);
            markerMap.set(marker, markerSpec);
            marker.addTo(group).on("popupopen", (event: any) => {
                const marker = event.popup._source;
                const markerSpec: MarkerSpec | undefined = markerMap.get(marker);
                markerSelected.set(markerSpec);
            });
            // For the Routes between the markers:
            if (markerLayer.title === "Start Points") {
                polyLine.push(markerSpec.location);
            }
            else
                polyLineEnd.push(markerSpec.location);

        });
        addLayer(markerLayer.title, group);
        control.addOverlay(group, markerLayer.title);
    }

    function addControl() {
        control = L.control.layers(baseLayers, overlays).addTo(imap);
    }

    function addLayer(title: string, layer: Layer) {
        overlays[title] = layer;
        imap.addLayer(layer);
    }

    function invalidateSize() {
        imap.invalidateSize();
        let hiddenMethodMap = imap as any;
        hiddenMethodMap._onResize();
    }

    export function moveTo(location: LatLng, zoom = 0) {
        if (zoom == 0) {
            imap.flyTo(location);
        } else {
            imap.flyTo(location, zoom);
        }
    }

    function addPopup(layerTitle: string, content: string, img: string, location: LatLng) {

        const imgString = "<img src='" + img + "' width='100%' alt='not found'/>"

        let popupGroup: LayerGroup;
        if (!overlays[layerTitle]) {
            popupGroup = L.layerGroup([]);
            overlays[layerTitle] = popupGroup;
            imap.addLayer(popupGroup);
        } else {
            popupGroup = overlays[layerTitle] as LayerGroup;
        }
        const popup = L.popup({
            closeOnClick: false,
            closeButton: false
        })
            .setLatLng({lat: location.lat, lng: location.lng} )
            .setContent(content + imgString);
        popup.addTo(popupGroup);
    }
</script>

<div {id} class="box" style="height: {height}vh; z-index: 0"></div>
