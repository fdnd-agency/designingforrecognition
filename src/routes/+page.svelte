<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	let { data } = $props()
</script>

<Filters projectCount={data.projects.length} />
<ProjectCardContainer projectsData={data.projects} />
<About />
