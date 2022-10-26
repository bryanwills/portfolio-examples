<script lang="ts">
	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<main>
	<div on:mousemove={handleMousemove}>
		The mouse position is: {m.x} x {m.y}
	</div>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h4 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.25em;
		font-weight: 300;
	}

	button {
		display: block;
		border-radius: 30px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>