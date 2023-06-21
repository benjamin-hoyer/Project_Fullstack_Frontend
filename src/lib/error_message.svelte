<script>

    export let message = "";
    export let errorMessage = "";
    export let successMessage = "";


</script>



{#if message === errorMessage}
    <div class="section">
        <div class="message is-danger">
            <div class="message-body" style="display: flex">
                {message}
                <button class="delete" on:click={() => message = null} style="margin: auto 0 auto auto" ></button>
            </div>
        </div>
    </div>
{:else if message === successMessage}
    <div class="section">
        <div class="message is-success">
            <div class="message-body" style="display: flex">
                {message}
                <button class="delete" on:click={() => message = null} style="margin: auto 0 auto auto" ></button>
            </div>
        </div>
    </div>
{/if}
