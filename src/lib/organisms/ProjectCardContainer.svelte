<script>
	import { ProjectCard } from '$lib'
	import { filterProjects } from '$lib/remote-functions/filter.remote'

	let { projectsData = [] } = $props()

	let Allprojects = $state(projectsData)

	$effect(() => {
		if (filterProjects.result?.data?.projects) {
			if (document.startViewTransition) {
				document.startViewTransition(() => {
					Allprojects = filterProjects.result.data.projects
				})
			} else {
				Allprojects = filterProjects.result.data.projects
			}
		}
	})
</script>

<section class="neutral projects-grid">
	<h2 id="project-container" tabindex="-1">Projecten</h2>

	{#each Allprojects as project (project.id)}
		<ProjectCard {project} />
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: 2.5em;
		padding: 5em 1em;
		background-color: var(--color);

		h2 {
			grid-column: 1/-1;
			justify-self: center;
			color: var(--color-primary);
		}

		@media (min-width: 420px) {
			grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
			align-items: stretch;
			padding: 5em clamp(1rem, 5vw, 5rem);
		}

		@media (min-width: 1225px) {
			grid-template-columns: repeat(2, minmax(375px, 1fr));
			padding: 5em clamp(1rem, 15vw, 7rem);
		}
	}
</style>
