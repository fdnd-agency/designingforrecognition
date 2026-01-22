<script>
	import { fallBackimg } from '$lib'
	export let project
	const { title, slug, img, date, end_date, description, id } = project
</script>

<article class="neutral card-container" style="view-transition-name: project-{id}">
	<a class="card-info" href="/project-{slug}">
		{#if title}
			<h3>{title}</h3>
		{:else}
			<h3><i>Title is missing</i></h3>
		{/if}

		<picture>
			<source type="image/avif" srcset="https://fdnd-agency.directus.app/assets/{img}?format=avif&width=270&height=250&fit=cover&quality=70" />
			<source type="image/webp" srcset="https://fdnd-agency.directus.app/assets/{img}?format=webp&width=270&height=250&fit=cover&quality=70" />
			<img src={fallBackimg} width="270" height="250" alt="image die te maken heeft met {img}" loading="lazy" />
		</picture>

		{#if description}
			<p class="description">{description}</p>
		{:else}
			<p class="description"><i>Description is missing</i></p>
		{/if}

		{#if date && !end_date}
			<p class="date">{new Date(date).getFullYear()}</p>
		{:else if date && end_date}
			<p class="date">{new Date(date).getFullYear()} / {new Date(end_date).getFullYear()}</p>
		{:else}
			<p class="empty-element"></p>
		{/if}
	</a>
</article>

<style>
	/* https://ishadeed.com/article/css-container-query-guide/#its-not-possible-to-query-a-container-against-itself */
	.card-container {
		--_dark-20: var(--dark-2, #0d3951);
		--_light-20: var(--light-2, #0d3951);
		--_border: var(--light-2, black);
		container: project-card / inline-size;
	}

	.card-info {
		display: grid;
		width: 100%;
		height: 100%;
		text-decoration: none;
		background-color: var(--_light-20);
		color: var(--color-primary);
		transition: scale 0.2s ease-in;
		cursor: pointer;
		overflow: hidden;

		&:hover,
		&:focus-within {
			background-color: var(--_dark-20);
			scale: 1.01;

			h3 {
				color: var(--color-accent-secondary);
			}
		}

		h3 {
			grid-row: 2;
			text-wrap: balance;
		}

		img {
			width: 100%;
			object-fit: cover;
			object-position: top;
		}

		h3,
		.date,
		.description {
			padding: 0 1rem;
		}

		.description {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 7;
			line-clamp: 7;
			max-height: 7lh;
			overflow: hidden;
			margin: 0.5rem 0 1rem 0;
		}

		.date {
			font-style: italic;
			margin: 0 0 1rem 0;
			justify-self: end;
		}
	}

	@container project-card (min-width: 385px) {
		.card-info {
			grid-template-rows: min-content min-content min-content min-content;

			img {
				height: 250px;
			}
		}
	}

	@container project-card (min-width: 630px) {
		.card-info {
			grid-template-columns: 255px 1fr;
			grid-template-rows: auto minmax(106px, auto) auto;
			height: 100%;

			h3 {
				grid-row: 1/2;
				grid-column: 2;
				align-self: end;
				padding: 0 1rem;
				margin-top: 1rem;
			}

			picture {
				grid-row: 1 /4;
				height: 100%;
			}

			img {
				height: 100%;
				margin: 0;
			}

			.date {
				align-self: end;
				justify-self: start;
			}

			.description {
				-webkit-line-clamp: 5;
				line-clamp: 5;
				max-height: 5lh;
			}
		}
	}
</style>
