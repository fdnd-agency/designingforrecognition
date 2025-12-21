<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	let { data } = $props()
	let projects = $state(data.projects)
</script>

<main>
	<Filters projectCount={projects.length} />
	<ProjectCardContainer projectsData={data.projects} />
	<About />
</main>
