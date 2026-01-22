<script lang="ts">
	import { ProjectCard } from '$lib'
	import { filterProjects } from '$lib/remote-functions/filter.remote'

	const props = $props()
	// Creates a reactive projects list derived from props that updates when props change,
	// falling back to an empty array when undefined
	const projectsData = $derived(() => props.projectsData ?? [])

	// Holds the currently displayed project list, this gets updated after filtering
	let allProjects = $state<ReturnType<typeof projectsData>>([])

	// Updates the allProjects list when filters change, using a view transition if supported
	$effect(() => {
		const filtered = filterProjects.result?.data?.projects
		const nextProjects = filtered ?? projectsData()

		if (document.startViewTransition && filtered) {
			document.startViewTransition(() => {
				allProjects = nextProjects
			})
		} else {
			allProjects = nextProjects
		}
	})
</script>

<section class="neutral">
	<h2 id="project-container" tabindex="-1">Projecten</h2>

	{#each allProjects as project (project.id)}
		<ProjectCard {project} />
	{/each}
</section>

<style>
	@media (prefers-reduced-motion: reduce) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none;
		}
	}

	section {
		display: grid;
		gap: var(--spacing-m);
		padding: var(--spacing-l) 1em var(--spacing-m) 1em;
		background-color: var(--color, #0d3951);

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
