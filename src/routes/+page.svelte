<script>
	import { Filters, ProjectCardContainer, About } from '$lib'
	let { data } = $props()
	let projects = $state(data.projects)
</script>

<h3>Welcome to Designing for Recognition</h3>
    import { SponsorCarousel, ContainerProjectCard } from '$lib'
    export let data
</script>

<ContainerProjectCard {data}/>

<SponsorCarousel {data}/>
