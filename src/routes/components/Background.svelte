<div class="overlay" />
<div class="overlay-2" />

<style>
	[class*='overlay'] {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		position: fixed;
	}

	.overlay {
		background-color: #200435;
		background-image: var(--bgImage);
		animation: 60s scroll infinite linear;
	}

	@media (prefers-reduced-motion) {
		.overlay {
			background-color: #200435;
			background-image: var(--bgImage);
			animation: 0s scroll infinite linear;
		}
	}

	.overlay-2 {
		background: linear-gradient(to right bottom, rgba(32, 4, 53, 0.6) 50%, rgba(255, 208, 70, 0.3));
	}

	@keyframes scroll {
		100% {
			background-position: -1920px -960px;
		}
	}
</style>
