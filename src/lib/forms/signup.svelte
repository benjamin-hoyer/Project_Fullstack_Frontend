<script>
    import {goto} from '$app/navigation';
    import {userService} from '../../services/user_service.ts';
    import Error from "$lib/error_message.svelte";

    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let message = '';
    let errorMessage = 'Error Trying to sign up';

    async function signup() {
        console.log(`attempting to sign up email: ${email}`);
        let success = await userService.signup(firstName, lastName, email, password);
        if (success) {
            goto('/');
        } else {
            message = errorMessage;
        }
    }
</script>

<h1 class="title">Sign up</h1>
<form on:submit|preventDefault={signup}>
    <p class="label">Name </p>
    <div class="field is-horizontal">
        <div class="field-body">

            <div class="field">

                <input
                        bind:value={firstName}
                        class="input"
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                />
            </div>
            <div class="field">
                <input
                        bind:value={lastName}
                        class="input"
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                />
            </div>

        </div>
    </div>
    <div class="field">
        <label class="label"
        >Email <input
                bind:value={email}
                class="input"
                type="text"
                placeholder="Enter email"
                name="email"
        /></label
        >
    </div>
    <div class="field">
        <label class="label"
        >Password<input
                bind:value={password}
                class="input"
                type="password"
                placeholder="Enter Password"
                name="password"
        /></label
        >
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Submit</button>
    </div>
</form>

<Error bind:message {errorMessage} successMessage="success"/>
