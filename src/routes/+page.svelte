<script>
	import { Filters, ProjectCardContainer, About, SponsorCarousel } from '$lib'
	let { data } = $props()
</script>

<main>
	<Filters />
	<ProjectCardContainer projectsData={data.projects} />
	<About />
	<SponsorCarousel sponsorsData={data.sponsors} />
</main>
