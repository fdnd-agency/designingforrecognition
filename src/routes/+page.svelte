<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	import { filterProjects } from '$lib/remote-functions/filter.remote'

	let { data } = $props()

	let projects = $state(data.projects)

	$effect(async () => {
		if (filterProjects.result?.data?.projects) {
			if (document.startViewTransition) {
				document.startViewTransition(() => {
					projects = filterProjects.result.data.projects
				})
			} else {
				projects = filterProjects.result.data.projects
			}
		}
	})
</script>

<main>
	<Filters filter={filterProjects} projectCount={projects.length} />
	<ProjectCardContainer projectsData={projects} />
	<About />
</main>
