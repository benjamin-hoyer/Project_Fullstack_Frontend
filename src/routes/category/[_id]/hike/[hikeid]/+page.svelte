<script lang="ts">
    import type {PageData} from "./$types";
    import Menu from "$lib/menus/menu.svelte";
    import UpdateHike from "$lib/forms/update_hike.svelte";
    import ImgCarousel from "$lib/images/image_carousel.svelte"
    import {userStore} from "../../../../../stores.ts";
    import {imageStore} from "../../../../../stores.ts";
    import UpdateHikeReadonly from "$lib/forms/update_hike_readonly.svelte";

    import UploadImage from "$lib/images/upload_image.svelte";

    export let data: PageData;
    const hike = data.hike;
    let index = 0;
    imageStore.set(hike.img);
    const category = data.category;
</script>

<Menu active="dashboard"/>
<section class="section">
    <div class="title">
        {hike.name}
    </div>
    <div class="columns is-vcentered">
        <div class="column" style="margin: 0 auto auto">
            {#if $userStore._id === category.userid || $userStore.role === "admin"}
                <UpdateHike hike="{hike}"/>
            {:else}
                <UpdateHikeReadonly hike="{hike}"/>
            {/if}
        </div>
        <div class="column" style="margin: 0 auto auto">
            <ImgCarousel images={$imageStore} bind:index={index} />
            {#if $userStore._id === category.userid || $userStore.role === "admin"}
            <UploadImage hike="{hike}" bind:index={index}/>
            {/if}
        </div>
    </div>
</section>