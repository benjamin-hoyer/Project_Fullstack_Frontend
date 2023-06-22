<script>
    import Error from "$lib/error_message.svelte";
    import {categoryService} from "../../services/category_service.ts";
    import {categoryStore} from "../../stores.ts";
    import {get} from "svelte/store";

    export let categoryName = "";
    let message = "";
    const successMessage = "Category added successfully";
    const errorMessage = "Category name already exists";

    async function addCategory() {
        let category = await categoryService.addCategory(categoryName);
        if (category.name !== "") {
            let categories = get(categoryStore)
            categories.push(category);
            categoryStore.set(categories);
            categoryName = "";
            message = successMessage;
        } else {
            message = errorMessage;
        }
    }
</script>

<form on:submit|preventDefault={addCategory}>
    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" bind:value={categoryName} name="name" style="margin-bottom: 5%">
        </div>
        <div class="control">
            <button class="button is-primary">Add Category</button>
        </div>
    </div>
</form>

<Error bind:message={message} successMessage={successMessage} errorMessage={errorMessage}/>




