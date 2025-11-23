<script>
	import { ProjectCard } from '$lib'
	export let projectsData
</script>

<section class="neutral projects-grid">
	{#each projectsData as project}
		<ProjectCard {project} />
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: 2.5em;
		padding: 5em 1em;
		background-color: var(--color);

		@media (min-width: 420px) {
			grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
			align-items: stretch;
			padding: 5em clamp(1rem, 5vw, 5rem);
		}

		/* @media (min-width: 848px) {

		} */

		@media (min-width: 1225px) {
			grid-template-columns: repeat(2, minmax(375px, 1fr));
			padding: 5em clamp(1rem, 15vw, 10rem);
		}
	}
</style>
