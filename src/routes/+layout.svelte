<slot />

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html, body) {
		height: 100%;
		margin: 0;
		padding: 0;
		width: 100vw;
		touch-action: manipulation;
	}
</style>
