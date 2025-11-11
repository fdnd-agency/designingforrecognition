<script>
  // componenten importeren zet na SponsorCarousel een "," dan kan je alles erin doen
    import { ContainerProjectCard, About, SponsorCarousel  } from '$lib'
    export let data
    console.log(data.projects)
</script>

<main>
	<ContainerProjectCard {data}/>
	<About />
	<SponsorCarousel {data} />
</main> 




<style>

/* .projects-grid {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap:1.5rem;
} */

    :global(body) {
        margin: 0;
    }
    
</style>