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
		<img src={backButton} width="36px" height="36px" alt="Terug naar de vorige pagina" />
		<span>Terug</span>
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
			alt="image die te maken heeft met {project.title}"
			fetchpriority="high"
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
		<section class="text-container text-fallback">
			<h3>Sorry, er is nog geen content beschikbaar.</h3>
			<p>Er wordt momenteel gewerkt aan dit onderwerp. Bekijk ons ander werk.</p>
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
		gap: 1em;
		place-items: center;
		margin: 0.5em;

		@media (min-width: 400px) {
			grid-template-columns: 1fr min-content minmax(280px, 400px) 1fr;
			margin: 1em;

			& > * {
				grid-column: 2 / 4;
			}
		}

		@media (min-width: 810px) {
			grid-template-columns: 1fr min-content minmax(280px, 400px) 1fr;
			grid-template-rows: 7.5em;

			picture {
				grid-column: 2 / 3;
			}

			article {
				grid-column: 3 / 4;
			}
		}
	}

	h2 {
		grid-row: 1;
		align-self: start;
		margin-top: 0.5em;
		font-size: clamp(1.35rem, calc(3vw + 1rem), 3rem);
	}

	button {
		display: flex;
		flex-direction: column;
		justify-self: start;
		width: min-content;
		border: none;
		background-color: inherit;
		margin: 0.5em 0;

		@media (min-width: 810px) {
			grid-row: 1;
			align-self: end;
		}

		span {
			font-size: var(--font-size-primary);
			font-style: italic;
		}
	}

	picture img {
		border-radius: var(--child-radius);
		box-shadow: 1px 1px 10px 0 var(--dark-2);
		width: clamp(270px, 40vw, 400px);
		height: auto;

		@media (min-width: 810px) {
			margin-left: 2em;
		}
	}

	p:nth-of-type(1) {
		justify-self: start;
		font-style: italic;
		margin: 0.5em 0;

		@media (min-width: 810px) {
			margin-left: 2em;
		}
	}

	article {
		display: flex;
		flex-direction: column;
		background-color: var(--oklch-accent-secondary);
		border-radius: var(--child-radius);
		box-shadow: 1px 1px 10px 0 var(--dark-2);
		padding: 0.8em;
		margin-top: 0.5em;

		@media (min-width: 810px) {
			grid-row: 2;
			align-self: start;
			justify-self: end;
			height: max-content;
			margin-top: 0;
		}

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
		align-items: center;

		p {
			width: clamp(25ch, 75%, 85ch);
		}

		strong {
			display: inline-block;
			font-size: var(--font-size-title-paragraph);
			margin: 0.5em 0 0.5em 0;
		}
	}

	.text-fallback {
		place-items: center;
		text-align: center;
		
		p {
			line-height: 1.5rem;
		}
	}
</style>
