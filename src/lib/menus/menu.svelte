<script type="ts">
    import HikingBrand from "../images/hiking_brand.svelte";
    import {userStore} from "../../stores.ts";

    export let active = "";
    let is_active = false;

</script>

<nav class="navbar is-link">
    <div class="navbar-brand" style="padding-left: 5%">
        <HikingBrand/>
        <div style="background-color: cornflowerblue; margin: 2% 5% auto auto" class=navbar-burger
             on:click={()=>is_active = !is_active} on:keydown>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>

    <div class="navbar-menu" class:is-active={is_active} id="navMenu">
        <div class="navbar-end" style="margin-right: 5%">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-dark" id="allHikes" href="/" class:is-info={active==="allhikes"}> All Hikes</a>
                    {#if $userStore.role === "admin"}
                        <a class="button is-dark" id="admin" href="/admin" class:is-info={active==="admin"}> Admin</a>
                    {/if}
                    <a id="dashboard" class="button is-dark" href="/dashboard" class:is-info={active==="dashboard"}>
                        Your Own Hikes </a>
                    <a id="map" class="button is-dark" href="/map" class:is-info={active==="map"}>
                        Map </a>
                    <a id="charts" class="button is-dark" href="/charts" class:is-info={active==="charts"}>
                        Charts </a>
                    <a id="logout" class="button is-dark" href="/logout" class:is-info={active==="logout"}> Logout </a>
                </div>
            </div>
        </div>
    </div>
</nav>

