<script>
	import { HeroSection, Filters, ProjectCardContainer, About } from '$lib'
	let { data } = $props()
	let projects = $state(data.projects)
</script>

<HeroSection 
project={data.projects[2]}
callout={data.projects[5]}
/>


<Filters projectCount={projects.length} />
<ProjectCardContainer projectsData={data.projects} />
<About />
