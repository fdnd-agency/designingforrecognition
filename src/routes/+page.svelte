<script>
	import { HeroSection, Filters, ProjectCardContainer, About, SponsorCarousel, } from '$lib'
	let { data } = $props()
</script>

<header>
	<HeroSection 
	project={data.projects[2]}
	callout={data.projects[5]}
	/>
</header>

<main>
	<Filters />
	<ProjectCardContainer projectsData={data.projects} />
	<About />
</main>
