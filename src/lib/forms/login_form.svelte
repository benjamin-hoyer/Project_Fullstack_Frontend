<script lang="ts">
    import {goto} from '$app/navigation';
    import {hikingService} from "../../services/hiking_service.ts";
    import StartMenu from "$lib/menus/start_menu.svelte";

    let email = '';
    let password = '';
    let errorMessage = '';

    async function login() {
        console.log(`attempting to log in email: ${email} with password: ${password}`);
        let success = await hikingService.login(email, password);
        if (success) {
            goto('/');
        } else {
            email = '';
            password = '';
            errorMessage = 'Invalid email or password';
        }
    }
</script>

<StartMenu/>
<div class="columns" style="margin-top: 5%">
    <div class="column ">
        <figure class="image is-2by1">
        <img src="/sunset_img.jpg" alt="Not loading"/>
        </figure>
    </div>
    <div>
    <form on:submit|preventDefault={login}>
    <div class="field" style="">
        <label class="label" for="email">Email</label>
        <input bind:value={email} class="input" id="email" name="email" placeholder="Enter email" type="text"/>
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password"
               type="password"/>
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Log In</button>
    </div>
    </form>

{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}
</div>
</div>