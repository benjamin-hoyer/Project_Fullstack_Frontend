<script lang="ts">
	import type { WeatherType } from '../services/types.ts';

	export let weather: WeatherType;
</script>

{#if weather !== undefined}
	<h3 class="title is-2">Weather</h3>
	<div class="box" style="display: flex; justify-content: space-between">
		<div class="box">
			<h3 class="title is-5">Description:</h3>
			<p>{weather.description}</p>
			<img src="https://openweathermap.org/img/wn/{weather.icon}@2x.png" alt="No Icon" />
		</div>
		<div class="box">
			<h3 class="title is-5">Temperature:</h3>
			<p>{weather.temperature}°</p>
			<div style="display: flex; height: 50%">
				<i style="margin: auto" class="fa-solid fa-temperature-half fa-3x" />
			</div>
		</div>
		<div class="box">
			<h3 class="title is-5">Windspeed:</h3>
			<p>{weather.windSpeed} Beaufort</p>
			<div style="display: flex; height: 50%">
				<i style="margin: auto" class="fa-solid fa-wind fa-3x" />
			</div>
		</div>
		<div class="box">
			<h3 class="title is-5">Air Pressure:</h3>
			<p>{weather.airPressure} Bar</p>
			<div style="display: flex; height: 50%">
				<i style="margin: auto" class="fa-solid fa-arrows-down-to-line fa-3x" />
			</div>
		</div>
		<div class="box">
			<h3 class="title is-5">Wind Direction:</h3>
			<p>{weather.windDirection}</p>
			<div style="display: flex; height: 50%">
				<i style="margin: auto" class="fa-solid fa-compass fa-3x" />
			</div>
		</div>
		<div></div>
		<!--without last box, it gets displayed wrong-->
	</div>
{/if}
