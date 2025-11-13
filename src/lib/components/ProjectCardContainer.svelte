<script>
	import { ProjectCard } from '$lib';
	export let data;
</script>

<section class="neutral">
	<h2>active filter</h2>
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</section>

<style>
	section {
		--card-width-small: 350px;
		--card-width-medium: 600px;
		--card-width-large: 700px;

		display: grid;
		place-items: center;
		gap: 1em;
		background-color: var(--color);

		@media (min-width: 730px) {
			grid-template-columns: repeat(auto-fit, minmax(var(--card-width-small), 1fr));
			padding: 0 1em;
			align-items: stretch;
		}

		@media (min-width: 1130px) {
			grid-template-columns: repeat(auto-fit, minmax(var(--card-width-large), 1fr));
		}

		@media (min-width: 2500px) {
			grid-template-columns: repeat(3, minmax(var(--card-width-medium), 1fr));
		}
	}

	h2 {
		grid-column: 1 / -1;
		margin: 0 1em;
		color: var(--color-primary);
	}
</style>
