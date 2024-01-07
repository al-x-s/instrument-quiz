<script>
	import Background from './components/Background.svelte';
	import Button from './components/Button.svelte';
	import { goto } from '$app/navigation';

	function handleClick() {
		goto('/quiz');
	}
</script>

<div class="container">
	<h1>Discover Your Instrument</h1>
	<Button title={'Get Started'} {handleClick} />
</div>

<p id="credit">Created by Alex Slater. Full credits can be found <a href="/credits">here</a>.</p>

<Background --bgImage="url(/src/lib/images/all_instruments.svg)" />

<style>
	a {
		color: inherit;
		text-decoration: inherit;
		border-bottom: 1px solid whitesmoke;
	}

	a:hover {
		color: hsl(0deg 0% 70%);
		border-bottom: 1px solid hsl(0deg 0% 70%);
	}

	#credit {
		position: absolute;
		width: fit-content;
		bottom: 10px;
		left: 0;
		right: 0;
		margin: auto;
		font-family: 'Lato', sans-serif;
		font-size: clamp(1rem, 1vw + 1rem, 2rem);
		color: whitesmoke;
		text-align: center;
		text-shadow: 2px 4px 8px hsl(0deg 0% 0% / 1);
	}

	.container {
		position: absolute;
		inset: 0;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		margin: auto;
	}

	h1 {
		color: whitesmoke;
		text-align: center;
		font-family: 'Bungee', sans-serif;
		font-size: clamp(2rem, 3vw + 1rem, 10rem);
	}
</style>
