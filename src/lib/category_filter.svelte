<script lang="ts">
    import type {Category} from "../services/hiking_types";
    import {filteredHikeStore, hikeStore, activeCategoryStore} from '../stores.js';
    import {get} from "svelte/store";


    export let categories: Category[] = [];

    let current = false;
    function filter(selectedCategory: Category) {
        filteredHikeStore.set(get(hikeStore))
        filteredHikeStore.update(hikes => hikes.filter(hike => hike.categoryid === selectedCategory._id));
        activeCategoryStore.set(selectedCategory);
        return selectedCategory;
    }
    function showAll() {
        filteredHikeStore.set(get(hikeStore))
        activeCategoryStore.set({hikes: [], userid: "", name: "", _id: ""});
    }

</script>

<div class:is-active="{current}" on:keydown class="dropdown "  on:click={()=> current = !current} style="margin-top: 20px; ">
    <div class="dropdown-trigger">
        <button class="button is-info" aria-haspopup="true" aria-controls="dropdown-menu" >
            <span>Filter after Category</span>
            <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
        </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
            <p class="dropdown-item has-text-weight-bold" on:click={()=> ( showAll())} on:keydown >
               All Hikes
            </p>
            {#each categories as category}
                    <hr class="dropdown-divider">
                    <p class="dropdown-item" on:click={filter(category)} on:keydown>
                        {category.name}
                    </p>
            {/each}
        </div>
    </div>
</div>