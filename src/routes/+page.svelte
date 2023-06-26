<script lang="ts">
    import {hikeStore, userStore, filteredHikeStore, activeCategoryStore} from '../stores.js';
    import StartMenu from "$lib/menus/start_menu.svelte";
    import Menu from "$lib/menus/menu.svelte";
    import ListHikes from "$lib/list_items/list_hikes.svelte";
    import Filter from "$lib/category_filter.svelte";
    import type {PageData} from "./$types";
    import {get} from "svelte/store";
    import type {Category, Hike} from "../services/hiking_types.ts";

    export let data: PageData;
    hikeStore.set(data.hikes);
    filteredHikeStore.set(data.hikes);

    function only_categories_with_hikes(hikes: Hike[], categories: Category[]) {
        const filteredCategoriesHelper: Category[] = [];

        hikes.forEach(hike => {
            for (let i = 0; i < categories.length; i++) {
                if (categories[i]._id === hike.categoryid) {
                    filteredCategoriesHelper.push(categories[i]);
                    categories.splice(i, 1);
                }
            }
        });
        return filteredCategoriesHelper;
    }


</script>

{#if $userStore.email}
    <Menu active="allhikes"/>
{:else}
    <StartMenu active="allhikes"/>
{/if}
<div style="margin-top: 20px; display: flex;  justify-content: space-between;">

    <div class="block" style=" display: flex">
        <h1 class="title is-2" style="margin: auto; color: #0078A8;">{$activeCategoryStore.name}</h1>
    </div>
    <Filter categories={only_categories_with_hikes(get(hikeStore), data.categories)}/>
    <div></div>
</div>
<ListHikes hikes={$filteredHikeStore} addHike={false} category={undefined}} />