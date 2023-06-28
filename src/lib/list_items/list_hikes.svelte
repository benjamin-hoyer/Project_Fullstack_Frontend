<script lang="ts">
    import type {Category, Hike} from '../../services/hiking_types';
    import HikeImg from '../images/hike_card.svelte'
    import LeafletMap from "$lib/maps/LeafletMap.svelte";
    import {getMarkerLayer, getMarkerLayerEnd} from "../../services/map_utils.ts";

    export let hikes: Hike[];
    export let addHike: boolean;

    export let category: Category;

</script>

<div data-sveltekit-preload-data="tap" class="container " style="margin-top: 30px">
    {#if hikes.length === 0}
        <div class="notification is-link" style="width: 100%">
            <p>No hikes found</p>
        </div>
    {/if}
    <div class="columns is-multiline is-3>">
        {#each hikes as hike}
            <div class="column is-one-third">
                <div class="card">
                    <HikeImg hike="{hike}"/>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p><a href="category/{hike.categoryid}/hike/{hike._id}"
                                      class="title is-3">{hike.name}</a></p>
                                <p class="subtitle is-4">From {hike.start} to {hike.end}</p>
                            </div>
                        </div>

                        <div class="content">
                            <p class=""><b>Description:</b> &nbsp {hike.description} </p>
                            <p class=""><b>Distance</b>: &nbsp {hike.distance} km</p>
                            <p class=""><b>Duration</b>: &nbsp {hike.duration} hours</p>
                        </div>
                    </div>
                    <div class="card">
                        <footer class="card-footer">
                            <a href="category/{hike.categoryid}/hike/{hike._id}" class="card-footer-item">Look up</a>
                        </footer>
                    </div>
                </div>
                <div >
                    <LeafletMap markerLayers="{[getMarkerLayer([hike]), getMarkerLayerEnd([hike])]}"
                                id={hike._id} height={20} location="{{lat: hike.lat, lng: hike.long}}" zoom={8}/>
                </div>
            </div>
        {/each}
        {#if addHike === true && category._id !== ""}
            <div class="column is-one-third" style="display:flex; border-style: dashed; border-radius: 30px">
            <a class="button is-rounded" style="font-size: 4em;  margin: auto;" href="category/{category._id}/addHike">
                        <i class="fa-solid fa-plus "></i>
                </a>
            </div>
        {/if}
    </div>
</div>

<!--TODO send message to update weather-->