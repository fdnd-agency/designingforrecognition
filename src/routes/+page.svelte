<script>
	// componenten importeren zet na SponsorCarousel een "," dan kan je alles erin doen
	import { Filters, ProjectCardContainer, About, SponsorCarousel } from '$lib'
	export let data
	const projectsData = data.projects
	const sponsorsData = data.sponsors
</script>

<main>
	<Filters />
	<ProjectCardContainer {projectsData} />
	<About />
	<SponsorCarousel {sponsorsData} />
</main>
