<script>
	import { backButton, fallBackimg } from '$lib'
	export let projectsDetails
	const { title, img, date, end_date, content } = projectsDetails
</script>

<section class="content-container primary">
	{#if title}
		<h2>{title}</h2>
	{:else}
		<h2><i>Title is missing</i></h2>
	{/if}

	<button type="button" class="neutral" on:click={() => history.back()} aria-label="Terug naar de vorige pagina">
		<!-- <img src={backButton} width="36px" height="36px" alt="" aria-hidden="true" /> -->
		<svg width="36" height="36" viewBox="0 0 48 48" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16 14L18.85 16.8L9.65 26L18.85 35.2L16 38L4 26L16 14ZM44 10V18C44 20.7667 43.0333 23.1167 41.1 25.05C39.1333 27.0167 36.7667 28 34 28H21.65L28.85 35.2L26 38L14 26L26 14L28.85 16.8L21.65 24H34C35.6667 24 37.0833 23.4167 38.25 22.25C39.4167 21.0833 40 19.6667 40 18V10H44Z"
				fill="black"
			/>
		</svg>

		<span aria-hidden="true">Terug</span>
	</button>

	<picture>
		<source type="image/avif" srcset="https://fdnd-agency.directus.app/assets/{img}?format=avif&width=270&height=250" />
		<source type="image/webp" srcset="https://fdnd-agency.directus.app/assets/{img}?format=webp&width=270&height=250" />
		<img src={fallBackimg} width="270" height="250" alt="image die te maken heeft met {title}" fetchpriority="high" />
	</picture>

	{#if date && !end_date}
		<p class="date">{new Date(date).getFullYear()}</p>
	{:else if date && end_date}
		<p class="date">
			{new Date(date).getFullYear()} / {new Date(end_date).getFullYear()}
		</p>
	{:else}
		<p></p>
	{/if}

	<article>
		<h3>Nieuws & Updates</h3>
		<span>Gepubliceerd op: 10 oktober 2025</span>
		<span>Laatst bijgewerkt op: 27 oktober 2025</span>
	</article>

	{#if content}
		<section class="text-container">
			{@html content}
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
	.content-container {
		--left-margin-810px: 2em;
		padding: var(--spacing-l) 0;

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

			.text-container {
				grid-column: 1 / -1;
			}
		}

		@media (min-width: 810px) {
			grid-template-rows: 11em;

			picture {
				grid-column: 2 / 3;
			}

			article {
				grid-column: 3 / 4;
			}

			.text-container {
				grid-column: 2 / 4;
			}
		}
	}

	h2 {
		grid-row: 1;
		align-self: start;
		margin-top: 0.5em;
		font-size: clamp(1.35rem, calc(3vw + 1rem), 3rem);

		@media (min-width: 810px) {
			text-align: center;
			text-wrap: balance;
		}
	}

	button {
		display: flex;
		flex-direction: column;
		justify-self: start;
		align-items: center;
		width: min-content;
		border: none;
		background-color: inherit;
		margin: 0.5em 0;

		&:hover, &:focus-visible {
			scale: 1.1;
			color: var(--light-2);

			svg path {
				fill: var(--light-2);
			}
		}

		&:active {
			scale: 1;
		}

		@media (min-width: 810px) {
			grid-row: 1;
			align-self: end;
		}

		span {
			font-size: 18px;
			font-style: italic;
		}
	}

	picture img {
		border-radius: var(--child-radius);
		width: clamp(270px, 75vw, 400px);
		height: auto;

		@media (min-width: 810px) {
			margin-left: var(--left-margin-810px);
		}
	}

	.date {
		justify-self: start;
		font-style: italic;
		margin: 0.5em 0;

		@media (min-width: 810px) {
			margin-left: var(--left-margin-810px);
		}
	}

	article {
		display: flex;
		flex-direction: column;
		background-color: var(--oklch-accent-secondary);
		border-radius: var(--child-radius);
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
			width: clamp(25ch, 90%, 85ch);
			margin-bottom: 2em;
		}

		strong {
			display: inline-block;
			font-size: var(--font-size-title-paragraph);
			margin-bottom: 0.5em;
		}
	}

	.text-fallback {
		text-align: center;

		h3 {
			text-wrap: balance;
		}

		p {
			line-height: 1.5rem;
		}
	}
</style>
