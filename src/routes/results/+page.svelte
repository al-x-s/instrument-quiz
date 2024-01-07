<!-- JAVASCRIPT -->

<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const results = data.results;

	import Background from '../components/Background.svelte';
	import Button from '../components/Button.svelte';

	import FullResultsModal from '../components/FullResultsModal.svelte';
	let showResultsModal = false;

	import { goto } from '$app/navigation';
	import { instrumentData, places } from '../../data.js';

	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import SplitType from 'split-type';

	function copy() {
		const url = document.location.href;
		navigator.clipboard.writeText(url).then(
			function () {
				console.log('URL Copied!');
			},
			function () {
				console.log('Error copying URL');
			}
		);
	}

	function copyAnimation() {
		copy();
		const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });
		const dialog = document.querySelector('.shareAnimation');

		tl.to(dialog, {
			opacity: 1,
			scale: 1,
			duration: 0.5
		}).to(dialog, {
			delay: 1,
			opacity: 0,
			scale: 0,
			duration: 0.5
		});
	}

	function share() {
		if (navigator.canShare) {
			navigator
				.share({
					title: 'Discover Your Instrument',
					url: window.location.href
				})
				.then(() => {
					console.log('Thanks for sharing!');
				})
				.catch(copyAnimation());
		} else {
			copyAnimation();
		}
	}

	function restart() {
		goto('/quiz');
	}

	function showFullResults() {
		showResultsModal = true;
	}

	// RETRIEVING ASSETS FOR RECOMMENDED INSTRUMENT

	const recommended = results[0].instrument;
	const assets = instrumentData[recommended];

	// GSAP ANIMATION

	onMount(() => {
		const h1 = document.querySelector('h1');
		const text = new SplitType('.banner');
		const banner = document.querySelector('.banner');
		const instrumentImage = document.querySelector('.instrumentImage');
		const results = document.querySelectorAll('p');
		const buttons = document.querySelector('.buttons');

		const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

		// const wiggle = gsap.

		gsap.set(['#Treble_Clef', '#Pair_of_Quavers', '#Quaver', '#Crotchet'], {
			scale: 0
		});

		gsap.to('.staveLine', {
			scaleX: 1,
			stagger: 0.25
		});

		gsap.to('.staveLineBottom', {
			scaleX: 1,
			delay: 0.25
		});

		gsap.to(['#Treble_Clef', '#Pair_of_Quavers', '#Quaver', '#Crotchet'], {
			scale: 1,
			stagger: 0.5
		});

		tl.from(text.chars, {
			opacity: 0,
			stagger: 0.03,
			duration: 2
		})
			.to([text.chars, banner], {
				opacity: 0,
				duration: 1
			})
			.to(banner, {
				display: 'none',
				duration: 0
			})
			.to([instrumentImage, results], {
				opacity: 1,
				duration: 2,
				x: 0,
				stagger: 0.25
			})
			.to([buttons, h1], {
				offset: -1,
				opacity: 1,
				duration: 2,
				x: 0
			});
	});
</script>

<!-- HTML -->

<Background />

<div class="wrapper">
	<div class="banner">
		<!-- <?xml version="1.0" encoding="utf-8"?> -->
		<!-- Generator: Adobe Illustrator 28.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 166.9 97"
			style="enable-background:new 0 0 166.9 97;"
			xml:space="preserve"
		>
			<g id="Stave">
				<line id="Lower_Middle" class="st0 staveLine" x1="0" y1="62.3" x2="166.6" y2="62.3" />
				<line id="Bottom" class="st0 staveLineBottom" x1="0.3" y1="75.4" x2="166.9" y2="75.4" />
				<line id="Middle" class="st0 staveLine" x1="0.3" y1="48.8" x2="166.9" y2="48.8" />
				<line id="Upper_Middle" class="st0 staveLine" x1="0.3" y1="35.8" x2="166.9" y2="35.8" />
				<line id="Top" class="st0 staveLine" x1="0.3" y1="23.8" x2="166.9" y2="23.8" />
			</g>
			<g id="Treble_Clef">
				<g>
					<path
						class="st1"
						d="M23.5,49.2c5.4-0.3,9.9,3.8,11.2,9.4c1.5,6.4-1.2,12-7.1,15.2c-0.7,0.4-1,0.7-0.8,1.6c0.7,3,1.2,6,1.8,9
				c0.4,1.9,0.5,3.9-0.1,5.8c-1.1,4-3.9,6-7.8,6.7c-3.9,0.7-8-1-9.9-4.3c-1.5-2.6-1.2-6,0.8-8.1c1.6-1.7,3.8-2.2,5.7-1.3
				c2.1,1,3.4,3.5,3,5.7c-0.4,2.3-2.3,4-4.7,4.2c-0.2,0-0.4-0.1-0.5,0.1c-0.1,0.2,0.1,0.4,0.2,0.5c0.5,0.6,1.2,0.9,2,1.2
				c4.7,1.3,9.3-2,9.6-6.8c0.1-1.4,0-2.9-0.3-4.3c-0.6-2.7-1.1-5.3-1.7-8c-0.1-0.5-0.2-0.7-0.8-0.6c-9.5,2.3-17.2-3.4-20.1-11
				c-2.8-7.3-1.4-13.9,3-20.1c2.6-3.7,5.8-6.8,8.9-10.1c0.5-0.5,0.6-0.9,0.4-1.5c-1-4-1.6-8.1-1.2-12.3c0.3-4.4,1.4-8.6,3.8-12.3
				c0.7-1.1,1.6-2,2.8-2.6c0.9-0.5,1.3-0.4,2,0.3c0.4,0.4,0.7,0.8,0.9,1.3c2.4,4.4,3.9,9,3.8,14c-0.1,6.8-2.7,12.6-7,17.7
				c-0.2,0.2-0.4,0.5-0.6,0.7c-1,0.7-1,1.6-0.7,2.6c0.5,2.1,0.9,4.2,1.3,6.3c0.1,0.6,0.3,0.9,1,0.8C22.8,49.1,23.2,49.2,23.5,49.2z
				 M20.4,73.8c1.1,0,2.2-0.2,3.4-0.4c0.7-0.1,0.8-0.4,0.6-1.1c-0.4-1.6-0.7-3.2-1-4.9c-0.7-3.6-1.4-7.2-2.1-10.8
				c-0.2-0.9-0.3-1-1.1-0.6c-1.1,0.5-2,1.3-2.8,2.3c-2.5,3.2-1.9,7.2,1.3,9.4c0.4,0.3,0.9,0.5,1.3,0.8c0.3,0.2,0.4,0.4,0.3,0.7
				c-0.1,0.3-0.3,0.4-0.6,0.4c-0.2,0-0.4-0.1-0.6-0.1c-4.7-1.7-7.5-7.2-6.1-12c1-3.4,3.1-5.9,6.2-7.5c0.5-0.2,0.8-0.5,0.6-1.1
				c-0.4-2.1-0.9-4.2-1.3-6.3c-0.1-0.6-0.2-0.7-0.8-0.3c-1.9,1.7-3.8,3.4-5.4,5.4c-2.3,2.6-4.2,5.5-5.1,8.8c-1.1,4.3-0.8,8.3,2,11.9
				C12,72.3,15.9,73.7,20.4,73.8z M18.2,31.7c0.1,0,0.2,0.1,0.3,0.1c0.6-0.7,1.3-1.4,1.9-2c2.8-3.1,4.9-6.5,5.7-10.6
				c0.3-1.4,0.5-2.8-0.1-4.2c-0.7-1.7-2.2-2.3-3.8-1.3c-1.4,0.9-2.3,2.2-3,3.7c-1.4,3.3-2,6.7-1.7,10.3C17.6,29,17.8,30.4,18.2,31.7z
				 M31.4,64.8c0-2.5-0.6-4.2-1.7-5.8c-1.5-2.1-3.5-3.2-6-3.4c-0.6-0.1-0.8,0.1-0.7,0.7c1.1,5.2,2.1,10.4,3.2,15.7
				c0.1,0.6,0.3,0.6,0.8,0.3C29.8,70.3,31.3,67.7,31.4,64.8z"
					/>
				</g>
			</g>
			<g id="Pair_of_Quavers">
				<path
					class="st1"
					d="M90.6,37.2c-0.3-0.2-0.6-0.3-0.8-0.4c-0.3-0.1-0.5-0.2-0.8-0.3c-2.6-0.6-4.9,0-7.1,1.4c-1.9,1.2-3.5,2.7-4.3,5
			c-0.6,2,0.1,3.9,1.9,4.9c0.8,0.5,1.7,0.7,2.6,0.8c3,0,5.6-1.2,7.7-3.2c1.5-1.5,2.3-3.3,2.2-5.5c-0.1-3.4,0-6.9,0-10.3
			c0-9.5,0-19,0-28.5c0-1.1,0-1-1-0.9c-4,0.7-8,1.4-12,2.2c-6.3,1.1-12.5,2.3-18.8,3.4c-0.7,0.1-0.9,0.4-0.9,1.1c0,9.2,0,18.5,0,27.7
			c0,2.6,0,5.2,0,7.7c0,0.6-0.1,0.7-0.6,0.3c-0.4-0.3-0.9-0.4-1.4-0.4c-3.9-0.6-8.5,1.5-10.5,5c-0.7,1.1-1,2.4-0.7,3.7
			c0.4,2.1,2.6,3.5,5.1,3.4c2.6-0.1,4.9-1.2,6.9-2.9c1.7-1.5,2.6-3.4,2.6-5.8c-0.1-3.1,0-6.2,0-9.3c0-8.3,0-16.6,0-24.9
			c0-0.7,0.2-1,0.9-1.1c1.5-0.2,3-0.5,4.4-0.8c8-1.4,16-2.9,23.9-4.3c0.6-0.1,0.7,0,0.7,0.6c0,9.1,0,18.2,0,27.3
			C90.6,34.3,90.6,35.7,90.6,37.2z"
				/>
			</g>
			<g id="Quaver">
				<path
					class="st1"
					d="M118.6,31.3c0,4.7,0,9.3,0,14c0,1.5,0,2.9,0,4.4c0,0.4-0.1,0.6-0.5,0.3c-0.5-0.3-1.1-0.4-1.7-0.5c-2.9-0.5-5.4,0.4-7.6,2.1
			c-1.5,1.1-2.7,2.4-3.4,4.1c-0.9,2.5,0.1,4.7,2.6,5.7c1.8,0.7,3.6,0.4,5.4-0.2c4.5-1.5,6.7-4.5,6.7-9.2c0-3.8,0-7.6,0-11.4
			c0-4.7,0-9.3,0-14c0-0.8,0.1-0.9,0.9-0.7c3.5,0.9,6.2,3,7.9,6.1c2,3.6,1.9,7.3,0.8,11.1c-0.6,2-1.5,3.9-2.3,5.7
			c-0.1,0.2-0.3,0.4,0,0.5c0.2,0.1,0.5,0.1,0.7,0c0.1-0.1,0.2-0.3,0.3-0.4c0.3-0.5,0.6-1,0.9-1.6c1.6-3.1,2.7-6.4,3-9.9
			c0.3-3.8-1.1-7-3.4-9.9c-1.1-1.4-2.3-2.6-3.5-3.9c-1.2-1.3-2.5-2.6-3.4-4.2c-1.2-2-1.5-4.2-1.7-6.4c-0.1-0.5-0.3-0.7-0.8-0.7
			c-0.7,0-0.7,0.4-0.7,0.9C118.6,19.3,118.6,25.3,118.6,31.3z"
				/>
			</g>
			<g id="Crotchet">
				<path
					class="st1"
					d="M151.6,63.8c-1.3-0.8-2.7-1-4.1-0.9c-3.4,0.3-6,2-8,4.7c-1.1,1.5-1.5,3.2-0.6,4.9c1,1.7,2.6,2.4,4.5,2.3
			c3.5-0.1,6.3-1.6,8.3-4.4c0.8-1,1.2-2.3,1.2-3.6c0-13,0-26,0-38.9c0-0.8-0.1-0.9-0.9-0.8c-0.7,0.1-0.5,0.5-0.5,0.9
			c0,9.4,0,18.8,0,28.2C151.6,58.8,151.6,61.2,151.6,63.8z"
				/>
			</g>
		</svg>
		<h2>Calculating Results</h2>
	</div>

	<h1>Your child is well suited to</h1>

	<div class="imageWrapper">
		<img class="instrumentImage" src={assets.image} alt={assets.name} />
	</div>

	<div class="descriptionWrapper">
		<p class="title">{assets.name}</p>
		<p class="description">
			{assets.description} <a target="_blank" href={assets.info}>Learn more</a>.
		</p>
	</div>

	<div class="buttons">
		<Button title={'Share'} handleClick={share} --grow="1" />
		<Button title={'Restart'} handleClick={restart} --grow="1" />
		<Button title={'See Full Results'} handleClick={showFullResults} --grow="1" />
	</div>
	<div class="shareAnimation">
		<p class="shareText">Link Copied!</p>
	</div>
</div>

<FullResultsModal bind:showResultsModal>
	<table class="results-table">
		{#each results as result, i}
			<tr>
				<td id="position">{places[i]}</td>
				<td id="instrument">{result.instrument}</td>
			</tr>
		{/each}
	</table>
</FullResultsModal>

<!-- CSS -->

<style>
	.shareAnimation {
		transform-origin: center;
		opacity: 0;
		position: absolute;
		inset: 0;
		margin: auto;
		width: fit-content;
		height: fit-content;
		background: hsl(0deg 73% 43%);
		border-radius: 5%;
	}

	.st0 {
		fill: none;
		stroke: #f5f5f5;
		stroke-width: 0.9696;
		stroke-miterlimit: 10;
	}
	.st1 {
		fill: #f5f5f5;
		clip-rule: evenodd;
	}

	.staveLine {
		transform: scaleX(0);
	}

	.staveLineBottom {
		transform: scaleX(0);
	}

	.shareText {
		font-family: 'Bungee', sans-serif;
		font-size: clamp(0.25rem, 2vw + 2rem, 3rem);
		color: whitesmoke;
		text-transform: uppercase;
		padding: 12px;
	}

	.banner {
		opacity: 1;
		position: absolute;
		inset: 0;
		margin-top: 20vh;
		padding: 5px;
		height: 100%;
		text-align: center;
		font-size: clamp(1rem, 1vw + 1.2rem, 20rem);
		color: whitesmoke;
		font-family: 'Bungee', sans-serif;
	}

	.wrapper {
		position: absolute;
		inset: 0;
		height: 100%;
		width: fit-content;
		max-width: 800px;
		max-height: 1100px;
		margin: auto;
		margin-top: -5px;
		padding: 1rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.imageWrapper {
		position: relative;
		width: 100%;
		flex: 1 1 10%;
		/* width: clamp(13rem, 15vw + 10rem, 20rem); */
	}

	.instrumentImage {
		opacity: 0;
		position: absolute;
		inset: 0;
		margin: auto;
		height: 80%;
	}

	.descriptionWrapper {
		align-self: flex-start;
		flex: 1;
	}

	h1 {
		opacity: 0;
		font-family: 'Lato', sans-serif;
		font-size: clamp(1rem, 1vw + 1rem, 2rem);
		color: hsl(0deg 0% 70%);
		text-transform: uppercase;
	}

	p {
		opacity: 0;
		color: whitesmoke;
		margin: 10px 0;
	}

	a {
		color: inherit;
		text-decoration: none;
		border-bottom: 1px solid whitesmoke;
	}

	a:hover {
		color: hsl(0deg 0% 30%);
		border-bottom: 1px solid hsl(0deg 0% 30%);
	}

	.title {
		font-family: 'Bungee', sans-serif;
		font-size: clamp(2rem, 1.5vw + 1rem, 12rem);
	}

	#position {
		font-family: 'Bungee', sans-serif;
	}

	#instrument {
		padding-bottom: 5.5px;
	}

	.description {
		font-family: 'Roboto Slab', serif;
		font-size: clamp(1.5rem, 1.5vw + 1rem, 2.8rem);
	}

	.buttons {
		opacity: 0;
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	.buttons:last-child {
		width: 100%;
	}

	.results-table {
		color: whitesmoke;
	}

	.results-table td {
		padding: 4px;
		font-family: 'Roboto Slab', serif;
		font-size: clamp(1.5rem, 1.5vw + 1rem, 2.8rem);
	}

	#Treble_Clef {
		transform-origin: 0% 50%;
	}
</style>
