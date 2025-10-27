<script>
	import { backButton } from '$lib';

	export let data;
	const project = data.projectsDetails[0];
</script>

{#if project.title}
	<h2>{project.title}</h2>
{:else}
	<h2><i>Title is missing</i></h2>
{/if}

<button>
	<img src={backButton} alt="Terug naar de vorige pagina" />
	<span>back</span>
</button>

<picture>
	<source
		type="image/avif"
		srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=avif&width=270&height=250"
	/>
	<source
		type="image/webp"
		srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=webp&width=250&height=165"
	/>
    <!-- change to {fallBackimg} before merging, this image if already on de dev branch -->
	<img
		src={project.img}
		width="270px"
		height="250px"
		alt="image die te maken heeft met {project.img}"
	/>
</picture>

{#if project.date && !project.end_date}
	<p>{new Date(project.date).getFullYear()}</p>
{:else if project.date && project.end_date}
	<p>{new Date(project.date).getFullYear()} / {new Date(project.end_date).getFullYear()}</p>
{:else}
	<p></p>
{/if}

<article>
	<h3>Nieuws & Updates</h3>
	<span>Gepubliceerd op: 10 oktober 2025</span>
	<span>Laatst bijgewerkt op: 27 oktober 2025</span>
</article>

{#if project.content}
	<section>
		{@html project.content}
	</section>
{:else}
	<section>
		<h3>Sorry, er is nog geen content beschikbaar.</h3>
		Er wordt momenteel gewerkt aan dit onderwerp. Bekijk ons ander werk.
		<a href="/">Terug naar homepagina</a>
	</section>
{/if}
