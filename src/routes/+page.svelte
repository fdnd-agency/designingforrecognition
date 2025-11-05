<script>
  // componenten importeren zet na SponsorCarousel een "," dan kan je alles erin doen
    import { ContainerProjectCard, About, FooterInfo, ProjectCard, SponsorCarousel  } from '$lib'
    export let data
    console.log(data.projects)
</script>

<main>
<!-- alle componenten kunnen we hier inladen --> 
<ContainerProjectCard data={data.projects}/>
<section class="projects-grid">
{#each data.projects.slice(0,4) as project}
<ProjectCard project={data.projects[0]}/>
{/each}</section>
<section class="about-us">
<About/></section>
<SponsorCarousel data={data.sponsors}/>





</main>

<FooterInfo/>


<style>

.projects-grid {
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap:1.5rem;
}

    :global(body) {
        margin: 0;
    }

    .about-us {
  margin-bottom: 2rem; /* of 60px, pas aan naar smaak */
}
    
</style>