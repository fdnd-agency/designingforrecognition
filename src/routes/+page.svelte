<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	import { filterProjects } from '$lib/remote-functions/filter.remote'

	let { data } = $props()

	let projects = $state(data.projects)

	$effect(async () => {
		if (await filterProjects.result?.data?.projects) {
			projects = filterProjects.result.data.projects
		}
	})
</script>

<main>
	<Filters filter={filterProjects} />
	<ProjectCardContainer projectsData={projects} />
	<About />
</main>
