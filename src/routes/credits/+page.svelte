<script>
	import Background from '../components/Background.svelte';
	import Button from '../components/Button.svelte';

	import { goto } from '$app/navigation';
	import { instrumentData } from '../../data.js';
	const instrumentList = Object.keys(instrumentData);

	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let pointsData;

	function goHome() {
		goto('/');
	}
</script>

<Background />

<div class="wrapper">
	<div class="container">
		<div class="buttonContainer">
			<Button title={'Return'} handleClick={goHome} />
		</div>
		<h1 id="credits">Credits</h1>
		<h2>Code Base</h2>
		<table>
			<tr>
				<td class="heading">DEVELOPER</td>
				<td class="data">Alex Slater</td>
			</tr>
			<tr>
				<td class="heading">QUIZ LOGIC</td>
				<td class="data"
					><a target="_blank" href="https://teachingservices.com.au/">Teaching Services Australia</a
					></td
				>
			</tr>
		</table>
		<h2>Images from Flaticon</h2>
		<table>
			{#each instrumentList as instrument}
				<tr>
					<td class="heading" id="instrument">{instrument}</td>
					<td class="data" id="attribution"
						><a target="_blank" href={instrumentData[instrument].attributionLink}
							>{instrumentData[instrument].attributionName}</a
						></td
					>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 95%;
		margin: auto;
		max-width: 800px;
		max-height: 1200px;
		padding: 0 1rem;
		color: whitesmoke;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* margin-top: -5%; */
		height: 100%;
	}

	#credits {
		color: whitesmoke;
		text-align: center;
		font-family: 'Bungee', sans-serif;
		font-size: clamp(2rem, 3vw + 2rem, 8rem);
		margin-bottom: 20px;
	}

	h2 {
		font-family: 'Lato', sans-serif;
		font-size: clamp(1rem, 1vw + 1rem, 10rem);
		color: hsl(0deg 0% 70%);
		text-transform: uppercase;
	}

	.heading {
		font-family: 'Lato', sans-serif;
		color: hsl(0deg 0% 70%);
		text-transform: uppercase;
	}

	a {
		color: inherit;
		text-decoration: inherit;
		border-bottom: 1px solid whitesmoke;
	}

	a:hover {
		color: hsl(0deg 0% 30%);
		border-bottom: 1px solid hsl(0deg 0% 30%);
	}

	.data {
		padding-left: 10px;
		padding-bottom: 6.5px;
	}

	td {
		padding: 5px;
	}

	table {
		padding: 5px;
		padding-bottom: 10px;
		font-size: clamp(0.5rem, 0.5vw + 0.75rem, 2rem);
		font-family: 'Roboto Slab', serif;
	}

	#instrument {
		text-transform: uppercase;
	}

	.buttonContainer {
		margin: auto 0;
		order: 1;
	}
</style>
