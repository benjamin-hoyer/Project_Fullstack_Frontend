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
                <a class="button is-dark" id="login" href="/login"> Log in </a>
            </div>
            <div class="navbar-item">
                <a class="button is-dark" id="signup" href="/signup"> Sign up </a>
            </div>
        </div>
    </div>
</nav>