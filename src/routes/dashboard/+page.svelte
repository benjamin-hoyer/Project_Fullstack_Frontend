<script lang="ts">
    import {hikeStore, filteredHikeStore, activeCategoryStore, categoryStore} from '../../stores.js';
    import Menu from "$lib/menus/menu.svelte";
    import ListHikes from "$lib/list_items/list_hikes.svelte";
    import Filter from "$lib/category_filter.svelte";
    import type {PageData} from "./$types";
    import AddCategory from "$lib/forms/add_category.svelte";

    export let data: PageData;
    hikeStore.set(data.hikes);
    filteredHikeStore.set(data.hikes);
    categoryStore.set(data.categories);


</script>

<Menu active="dashboard"/>
<div style="display: flex;  justify-content: space-between; margin-top: 20px;">

    <div class="block" style=" display: flex">
        <h1 class="title is-2" style="margin: auto; color: #0078A8;">{$activeCategoryStore.name}</h1>
    </div>
    <Filter categories={$categoryStore}/>
    <AddCategory/>
</div>

<ListHikes hikes={$filteredHikeStore} addHike={true} category={$activeCategoryStore}/>



