<script lang="ts">
    import HikeImg from "$lib/images/hike_card_carousel.svelte"
    import {imageStore} from "../../stores.ts";

    let currentIndex = 0;
    export let images: string[];

    let currentImage = images[currentIndex];

    function next() {
        currentIndex = (currentIndex + 1) % images.length;
        currentImage = images[currentIndex];
    }

    function previous() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        currentImage = images[currentIndex];
    }

</script>


<div class="container">
    <div class="box">
        <HikeImg hikeImg="{currentImage}"/>
        <div class="columns is-centered">
            {#each images as image, i}
                {#if i === currentIndex}
                    <span class="icon">  <i class="fa-solid fa-circle"></i>  </span>
                {:else}
                    <span class="icon"> <i class="fa-regular fa-circle"></i> </span>
                {/if}
            {/each}
        </div>
        <div class="buttons is-centered">
            <button class="button is-link" on:click={previous}>
                <i class="fa-solid fa-angle-left"></i></button>
            <button class="button is-link" on:click={next}><i class="fa-solid fa-angle-right"></i></button>
        </div>
    </div>
</div>
