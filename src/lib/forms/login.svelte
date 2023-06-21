<script lang="ts">
    import {goto} from '$app/navigation';
    import {userService} from "../../services/user_service.ts";
    import Error from "$lib/error_message.svelte";

    let email = '';
    let password = '';
    let errorMessage = '';
    let message = 'Invalid email or password';

    async function login() {
        console.log(`attempting to log in email: ${email} with password: ${password}`);
        let success = await userService.login(email, password);
        if (success) {
            goto('/');
        } else {
            email = '';
            password = '';
            errorMessage = message;
        }
    }
</script>

<h1 class="title">Log in</h1>
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

<Error bind:message={message} errorMessage={errorMessage} />

