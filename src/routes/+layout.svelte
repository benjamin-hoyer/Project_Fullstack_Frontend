<script lang="ts">
	let errorMessage = '';
</script>

<div class="container">
	<slot />
</div>

{#if errorMessage}
	<div class="section">
		{errorMessage}
	</div>
{/if}
