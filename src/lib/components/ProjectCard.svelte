<script>
	import { fallBackimg } from '$lib'
	export let project
</script>

<article class="neutral card-container">
	<a class="card-info" href="/project-{project.slug}">
		{#if project.title}
			<h3>{project.title}</h3>
		{:else}
			<h3><i>Title is missing</i></h3>
		{/if}

		<picture>
			<source type="image/avif" srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=avif&width=570&height=250" />
			<source type="image/webp" srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=webp&width=250&height=165" />
			<img src={fallBackimg} width="270px" height="250px" alt="image die te maken heeft met {project.img}" loading="lazy" />
		</picture>

		{#if project.date && !project.end_date}
			<p class="date">{new Date(project.date).getFullYear()}</p>
		{:else if project.date && project.end_date}
			<p class="date">{new Date(project.date).getFullYear()} / {new Date(project.end_date).getFullYear()}</p>
		{:else}
			<p class="empty-element"></p>
		{/if}

		{#if project.description}
			<p class="description">{project.description}</p>
		{:else}
			<p class="description"><i>Description is missing</i></p>
		{/if}
	</a>
</article>

<!-- 
@container project-card (min-width: 520px) {
		.card-info {
			grid-template-columns: clamp(225px, 40cqw, 276px) 1fr;
			/* grid-template-rows: min-content min-content min-content; */

			h3 {
				grid-row: 2/3;
				grid-column: 2;
				align-self: end;
				padding: 0 1rem;
			}

			picture {
				grid-row: 1 /3;
			}

			img {
				height: 100%;
				margin: 0;
				/* width: auto; */
				border-radius: var(--radius) 0 0 0;
			}

			.date {
				align-self: end;
			}

			.description {
				grid-column: 1/3;
				grid-row: 3;
				width: clamp(41ch, 100%, 75ch);
				padding-bottom: 0;

				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				text-overflow: ellipsis;
				-webkit-line-clamp: 5;
				height: calc(1.5em * 4.2);
				margin: 1em 0;
			}
		}
	}

	@container project-card (min-width: 680px) {
		.card-info {
			grid-template-columns: 275px 1fr;

			/* height: 17rem; */

			picture {
				grid-row: 1 /4;
				height: 100%;
			}

			img {
				/* width: 100%; */
				border-radius: var(--radius) 0 0 var(--radius);
				margin: 0;
				overflow: hidden;
			}

			.date {
				margin-top: 1rem;
				padding: 0 1rem;
			}

			.description {
				grid-column: 2;
				grid-row: 3;
				/* -webkit-line-clamp: 6;
				height: calc(1.5em * 5);
				margin: 0.5em 0 1em 0; */
			}
		}
	} -->

<style>
	/* https://ishadeed.com/article/css-container-query-guide/#its-not-possible-to-query-a-container-against-itself */
	.card-container {
		--radius: 15px;
		--child-radius: calc(var(--radius) / 2);

		container: project-card / inline-size;
	}

	.card-info {
		display: grid;
		width: 100%;
		/* height: 100%; */
		text-decoration: none;
		background-color: var(--light-2);
		color: var(--color-primary);
		border-radius: var(--radius);
		box-shadow: 1px 1px 10px 0 var(--dark-2);
		transition: scale 0.2s ease-in;
		cursor: pointer;
		overflow: hidden;

		&:hover,
		&:focus-within {
			background-color: var(--dark-2);
			outline: 2px solid var(--light-2);
			box-shadow: 1px 1px 5px 10px var(--dark-1);
			scale: 1.01;
			transition: scale 0.2s ease-in;

			h3 {
				color: var(--color-accent-secondary);
			}
		}

		h3 {
			grid-row: 3;
		}

		img {
			width: 100%;
			object-fit: cover;
			object-position: top;
			border-radius: var(--radius) var(--radius) 0 0;
			margin-bottom: 1rem;
		}

		h3,
		.date,
		.description {
			padding: 0 1rem 1rem 1rem;
		}
	}

	@container project-card (min-width: 630px) {
		.card-info {
			grid-template-columns: 255px 1fr;
			grid-template-rows: auto minmax(106px, auto) auto;

			/* height: 17rem; */

			h3 {
				grid-row: 2/3;
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
				/* width: 100%; */
				height: 100%;
				border-radius: var(--radius) 0 0 var(--radius);
				margin: 0;
				overflow: hidden;
			}

			.date {
				margin-top: 1rem;
				padding: 0 1rem;
				align-self: end;
			}

			.description {
				grid-column: 2;
				grid-row: 3;

				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				text-overflow: ellipsis;
				-webkit-line-clamp: 5;
				height: calc(1.5em * 4.2);
				margin: 1em 0;
			}
		}
	}
</style>
