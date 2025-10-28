<script>
	import { backButton } from '$lib';

	export let data;
	const project = data.projectsDetails[0];
</script>

<section class="content-container primary">
	{#if project.title}
		<h2>{project.title}</h2>
	{:else}
		<h2><i>Title is missing</i></h2>
	{/if}

	<button>
		<img src={backButton} width="36px" height="36px" alt="Terug naar de vorige pagina" >
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
		<section class="text-container">
			{@html project.content}
		</section>
	{:else}
		<section class="text-container">
			<h3>Sorry, er is nog geen content beschikbaar.</h3>
			Er wordt momenteel gewerkt aan dit onderwerp. Bekijk ons ander werk.
			<a href="/">Terug naar homepagina</a>
		</section>
	{/if}
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		--radius: 15px;
		--child-radius: calc(var(--radius) / 2);
	}

	.content-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: min-content;
		place-items: center;
		margin: 0.5em;
	}

	h2 {
		font-size: var(--font-size-title-paragraph);
	}

	button {
		display: flex;
		flex-direction: column;
		justify-self: start;
		width: min-content;
		border: none;
		background-color: inherit;
		margin: 0.5em 0;

		span {
			font-size: var(--font-size-primary);
		}
	}

	picture img {
		border-radius: 7.5px;
		box-shadow: 1px 1px 10px 0 var(--dark-2);
	}

	p:nth-of-type(1) {
		justify-self: start;
		margin: 0.5em 0;
	}

	article {
		display: flex;
		flex-direction: column;
		background-color: var(--oklch-accent-secondary);
		border-radius: var(--radius);
		padding: 0.8em;
		margin-top: 0.5em;

		h3 {
			font-size: var(--font-size-title-paragraph);
		}

		h3,
		span {
			margin: 0 0 0.5em 0;
		}
	}

	/* global is required because this section's content comes from Directus, it will not be styled without it */
	/* source: https://svelte.dev/docs/svelte/global-styles#:global */
	.text-container :global {
		display: flex;
		flex-direction: column;

		p {
			width: clamp(25ch, 100%, 100ch);
		}

		strong {
			display: inline-block;
			font-size: var(--font-size-title-paragraph);
			margin: 0.5em 0 0.5em 0;
		}
	}
</style>
