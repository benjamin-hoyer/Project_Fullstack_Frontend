<script lang="ts">
    import {hikeStore, filteredHikeStore, activeCategoryStore} from '../../stores.js';
    import Menu from "$lib/menus/menu.svelte";
    import ListHikes from "$lib/list_items/list_hikes.svelte";
    import Filter from "$lib/category_filter.svelte";
    import type {PageData} from "./$types";

    export let data: PageData;
    hikeStore.set(data.publicHikes);
    filteredHikeStore.set(data.publicHikes);


</script>

<Menu  active="dashboard"/>
<Filter categories={data.categories}/>
<ListHikes hikes={$filteredHikeStore} addHike={true} category={$activeCategoryStore}/>



