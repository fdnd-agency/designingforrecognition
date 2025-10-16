<script>
	import { ProjectCard } from '$lib';
</script>

<section class="neutral">
	<h2>active filter</h2>
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
		background-color: var(--color);

		@media (min-width: 730px) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
			padding: 0 1em;
		}

		@media (min-width: 1130px) {
			grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
		}

		@media (min-width: 2500px) {
			grid-template-columns: repeat(3, minmax(600px, 1fr));
		}
	}

	h2 {
		grid-column: 1 / -1;
		margin: 0 1em;
		color: var(--color-primary);
	}
</style>
