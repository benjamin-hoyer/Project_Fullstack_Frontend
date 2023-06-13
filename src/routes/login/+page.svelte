<script>
    import StartMenu from "$lib/menus/start_menu.svelte";
    import Login from "$lib/forms/login.svelte";
</script>

<StartMenu active="login"/>
<div class="columns" style="margin-top: 5%">
    <div class="column is-two-thirds">
        <figure class="image">
            <img src="/sea.jpg" alt="Not loading"/>
        </figure>
    </div>
    <div class="column">
        <Login/>
    </div>
</div>