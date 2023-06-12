<script lang="ts">
    import {publicHikeStore, userStore, filteredPublicHikeStore} from '../stores.js';
    import StartMenu from "$lib/menus/start_menu.svelte";
    import Menu from "$lib/menus/menu.svelte";
    import ListHikes from "$lib/list_items/list_hikes.svelte";
    import Filter from "$lib/category_filter.svelte";
    import type {PageData} from "./$types";

    export let data: PageData;
    publicHikeStore.set(data.publicHikes);
    filteredPublicHikeStore.set(data.publicHikes);


</script>

{#if $userStore.email}
    <Menu/>
{:else}
    <StartMenu/>
{/if}
<Filter categories={data.categories}/>
<ListHikes hikes={$filteredPublicHikeStore}/>



