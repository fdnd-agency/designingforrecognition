<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	import { filterProjects } from '$lib/remote-functions/filter.remote'

	let { data } = $props()

	let projects = $state(data.projects)

	// effect wordt opnieuw uitgevoerd zodra iets daarbinnen verandert
	$effect(async () => {
		if (await filterProjects.result?.data?.projects) {
			// projects is een state, set update de state van projects met de gefilterde lijst uit de remote function
			// result is de return uit de remote function
			projects = filterProjects.result.data.projects
		}
	})
</script>

<main>
	<Filters filter={filterProjects} />
	<ProjectCardContainer projectsData={projects} />
	<About />
</main>
