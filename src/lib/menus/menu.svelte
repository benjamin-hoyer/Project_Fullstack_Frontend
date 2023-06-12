<script type="ts">
    import HikingBrand from "../images/hiking_brand.svelte";

</script>

<nav class="navbar is-link" >
    <div class="navbar-brand" style="padding-left: 5%">
        <HikingBrand/>
        <div style="background-color: cornflowerblue; margin: 2% 5% auto auto" class="navbar-burger"
             onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>

    <div class="navbar-menu" id="navMenu">
        <div class="navbar-end" style="margin-right: 5%">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-dark" id="admin" href="/admin"> Admin</a>
                    <a id="dashboard" class="button is-dark" href="/dashboard"> Dashboard </a>
                    <a id="settings" class="button is-dark" href="/settings"> Settings </a>
                    <a id="logout" class="button is-dark" href="/logout"> Logout </a>
                </div>
            </div>
        </div>
    </div>
</nav>

