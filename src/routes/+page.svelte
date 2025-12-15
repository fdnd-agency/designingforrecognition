<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	export let data
	const projectsData = data.projects
</script>

<main>
	<Filters />
	<ProjectCardContainer {projectsData} />
	<About />
</main>
