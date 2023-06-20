<script lang="ts">
    import {publicHikeStore, userStore, filteredPublicHikeStore} from '../stores.js';
    import StartMenu from "$lib/menus/start_menu.svelte";
    import Menu from "$lib/menus/menu.svelte";
    import ListHikes from "$lib/list_items/list_hikes.svelte";
    import Filter from "$lib/category_filter.svelte";
    import type {PageData} from "./$types";
    import {get} from "svelte/store";

    export let data: PageData;
    publicHikeStore.set(data.publicHikes);
    filteredPublicHikeStore.set(data.publicHikes);

    function only_categories_with_hikes(hikes, categories) {
        const filtered_categories = [];

        hikes.forEach(hike => {
          for (let i = 0; i < categories.length; i++) {
              if (categories[i]._id === hike.categoryid) {
                  filtered_categories.push(categories[i]);
                  categories.splice(i, 1);
              }
          }});
        return filtered_categories;
    }


</script>

{#if $userStore.email}
    <Menu  active="allhikes"/>
{:else}
    <StartMenu active="allhikes"/>
{/if}
<Filter categories={only_categories_with_hikes(get(publicHikeStore), data.categories)}/>
<ListHikes hikes={$filteredPublicHikeStore}/>



