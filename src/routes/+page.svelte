<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	let { data } = $props()
	let projects = $state(data.projects)
</script>

<Filters projectCount={projects.length} />
<ProjectCardContainer projectsData={data.projects} />
<About />
