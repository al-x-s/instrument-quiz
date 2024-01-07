<script>
	import Background from '../components/Background.svelte';
	import Button from '../components/Button.svelte';
	import ProgressBar from '../components/ProgressBar.svelte';

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { questions, instrumentData } from '../../data.js';
	import { scores } from '../../stores.js';

	import { fade } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let index = 0;
	let pointsData;

	let progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

	function resetScores() {
		let instruments = Object.keys($scores);

		scores.update((obj) => {
			const newObj = { ...obj }; // create a shallow copy
			instruments.forEach((instrument) => {
				newObj[instrument] = 10;
			});
			return newObj; // return the updated object
		});
	}

	onMount(() => {
		resetScores();
	});

	function generateURL(data) {
		const instruments = Object.keys(instrumentData);
		let route = ['?'];
		instruments.forEach((instrument, index) => {
			const slug = instrumentData[instrument].slug;
			const points = data[instrument];
			const and = instruments.length === index + 1 ? '' : '&';
			route.push(slug + '=' + points + and);
		});
		return route.join('');
	}

	function updateScores(pointsData) {
		scores.update((obj) => {
			const newObj = { ...obj }; // create a shallow copy
			pointsData.forEach(({ instrument, points }) => {
				newObj[instrument] += points;
			});
			return newObj; // return the updated object
		});
	}

	function nextQuestion(e) {
		//  If user answers "true" scores are updated
		if (e.target.textContent === 'True') {
			pointsData = questions[index].score;
			updateScores(pointsData);
		}

		//  Next Question is presented by incrementing the index
		if (index + 1 === questions.length) {
			let slug = generateURL($scores);
			goto(`/results${slug}`);
		} else {
			index += 1;
			progress.set((index / questions.length) * 100);
		}
	}
</script>

<Background />

<div class="wrapper">
	<div class="container">
		<!-- Progress Bar -->
		<div class="progressBar">
			<ProgressBar {progress} />
		</div>

		<div class="questionContainer">
			<h2 class="category">{questions[index].category}</h2>
			{#key questions[index].question}
				<h1 class="question" in:fade={{ x: 2000, duration: 1000, delay: 200 }}>
					{questions[index].question}
				</h1>
			{/key}
		</div>

		<div class="response">
			<Button title={'False'} handleClick={nextQuestion} />
			<Button title={'True'} handleClick={nextQuestion} />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 90%;
		margin: auto;
		max-width: 800px;
		max-height: 1000px;
		padding: 0 1rem;
	}

	.category {
		font-family: 'Lato', sans-serif;
		font-size: clamp(1rem, 1vw + 1rem, 10rem);
		color: hsl(0deg 0% 70%);
		text-transform: uppercase;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: auto;
		transition: all 2s;
	}

	.question {
		color: whitesmoke;
		font-size: clamp(2rem, 1.5vw + 1rem, 15rem);
		font-family: 'Roboto Slab', serif;
		flex: 1 1 auto;
		margin-bottom: auto;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* margin-top: -5%; */
		height: 100%;
	}

	.progressBar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
		width: 100%;
	}

	.response {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
