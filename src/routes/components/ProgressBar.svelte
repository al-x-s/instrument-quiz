<script>
	export let progress;
</script>

<div class="outer">
	<div class="inner" style="width: {$progress}%" />
</div>
<p>{Math.ceil($progress)}%</p>

<style>
	p {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1.5em;
		font-weight: 500;
		color: whitesmoke;
	}

	.outer,
	.inner {
		height: 2em;
		border-radius: 20px;
	}

	.outer {
		width: 90%;
		margin: 10px auto;
		background-color: transparent;
		border: 1px solid #222;
	}

	.inner {
		/* width: 40%; */
		background-color: blueviolet;
	}
</style>
