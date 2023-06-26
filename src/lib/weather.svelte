<script>

    import { onMount } from "svelte";
    export let lat = 0;
    export let long = 0;
    let path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=380fed487173e2913b2006a2902cb45e`;

    let weather;

    onMount(() => {
        weather = getWeatherData(path);

        async function getWeatherData(path) {
            const res = await fetch(path);
            const text = await res.json();
            console.log(text);

            if (res.ok) {
                return text;
            } else {
                throw new Error(text);
            }
        }
    });


</script>

{#if weather}
    {#await weather}
        <em>Loading Weather...</em>
    {:then weather_data}
        <div>
            {weather_data.dt}
        </div>
        hi
    {:catch error}
        <em />
    {/await}
{/if}