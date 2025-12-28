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

<section class="neutral">
	<h2 id="project-container" tabindex="-1">Projecten</h2>

	{#each Allprojects as project (project.id)}
		<ProjectCard {project} />
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: var(--spacing-m);
		padding: var(--spacing-l) 1em var(--spacing-m) 1em;
		background-color: var(--color);

		h2 {
			grid-column: 1/-1;
			justify-self: center;
			color: var(--color-primary);
		}

		@media (min-width: 420px) {
			grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
			align-items: stretch;
			padding: var(--spacing-l) clamp(1rem, 5vw, 5rem);
		}

		@media (min-width: 1225px) {
			grid-template-columns: repeat(3, 1fr);
			padding: var(--spacing-l) clamp(1rem, 15vw, 7rem);
		}
	}
</style>
