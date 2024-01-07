<script>
	import Button from './Button.svelte';
	export let showResultsModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showResultsModal) dialog.showModal();

	function closeModal() {
		dialog.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showResultsModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<!-- <slot name="header" /> -->
		<!-- <hr /> -->
		<slot />
		<!-- <hr /> -->
		<!-- svelte-ignore a11y-autofocus -->
		<!-- <div class="closeButton" autofocus on:click={() => dialog.close()}>Close</div> -->
		<div class="buttonWrapper">
			<Button title={'Close'} handleClick={closeModal} />
		</div>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 1em;
		border: none;
		padding: 1em 1em 0 1em;
		background: linear-gradient(150deg, #200435, #220438, #270541, #2f064d, #450973);
		filter: drop-shadow(0px 0px 16px hsl(0deg 0% 0% / 0.5));
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.buttonWrapper {
		display: block;
		width: fit-content;
		margin: 10px auto;
	}
</style>
