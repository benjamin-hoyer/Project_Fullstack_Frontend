<script type="ts">
    import HikingBrand from "../images/hiking_brand.svelte";

    export let active = "";
    let is_active = false;

</script>

<nav class="navbar is-link ">
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
                    <a class="button is-dark" id="allHikes" href="/" class:is-info={active==="allhikes"}> All public Hikes</a>
                    <a id="dashboard" class="button is-dark" href="/dashboard" class:is-info={active==="dashboard"}>
                        Your Own Hikes </a>
                    <a id="map" class="button is-dark" href="/map" class:is-active={active==="map"}>
                        <i class="fas fa-map-marked-alt fa-2x" style="color: darkseagreen"></i> </a>
                    <a id="charts" class="button is-dark" href="/charts" class:is-active={active==="charts"}>
                        <i class="fas fa-chart-line fa-2x" style="color: lightskyblue"></i> </a>
                    <a id="logout" class="button is-dark" href="/logout" class:is-active={active==="logout"}>
                        <i class="fas fa-sign-out-alt fa-2x" style="color: lightpink"></i> </a>
                </div>
            </div>
        </div>
    </div>
</nav>

