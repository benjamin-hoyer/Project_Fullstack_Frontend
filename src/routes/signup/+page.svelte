<script>
    import StartMenu from "$lib/menus/start_menu.svelte";
    import SignUp from "$lib/forms/signup.svelte";

</script>


<StartMenu active="signup"/>
<div class="columns" style="margin-top: 5%">
    <div class="column is-two-thirds">
        <figure class="image">
            <img src="/sunset_regensburg_besser.jpg" alt="Not loading"/>
        </figure>
    </div>
    <div class="column">
        <SignUp/>
    </div>
</div>
