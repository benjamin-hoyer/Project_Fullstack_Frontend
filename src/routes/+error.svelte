<script>
	import { page } from '$app/stores';
	import StartMenu from '$lib/menus/start_menu.svelte';
</script>

<StartMenu />
{#if $page.error}
	<h1 class="title" style="margin-top: 5%">{$page.status}: {$page.error.message}</h1>
{/if}

{#if $page.status === 401}
	<a class="button is-danger" href="/login">Login</a>
{/if}
