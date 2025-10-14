<script>
	import { ProjectCard } from '$lib';
</script>

<section>
	<h2>Filter de projecten</h2>
	{#each Array(5)}
		<ProjectCard />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 1em;

		@media (min-width: 730px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
			margin: 0 1em;
		}

		@media (min-width: 1130px) {
			grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
		}

		@media (min-width: 1880px) {
			grid-template-columns: repeat(2, minmax(600px, 1fr));
		}
	}

	h2 {
		grid-column: 1 / -1;
		margin: 0 1em;
	}
</style>
