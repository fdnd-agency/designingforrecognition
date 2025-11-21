<script>
	import { fallBackimg } from '$lib'
	export let project
</script>

<article class="neutral">
	<a class="card-container" href="/project-{project.slug}">
		{#if project.title}
			<h3>{project.title}</h3>
		{:else}
			<h3><i>Title is missing</i></h3>
		{/if}

		<picture>
			<source type="image/avif" srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=avif&width=270&height=250" />
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
			<p class="description"><i>Currently no description available</i></p>
		{/if}
	</a>
</article>

<style>
	/* article {
		--radius: 15px;
		--child-radius: calc(var(--radius) / 2);

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, min-content);
		position: relative;
		background-color: var(--light-2);
		color: var(--color-primary);
		border-radius: var(--radius);
		margin: 1em 0.5em;
		padding: 0.5em;
		max-width: 400px;
		cursor: pointer;
		box-shadow: 1px 1px 10px 0 var(--dark-2);
		transition: scale 0.2s ease-in;

		&:hover,
		&:focus-within {
			background-color: var(--dark-2);
			outline: 2px solid var(--light-2);
			box-shadow: 1px 1px 5px 10px var(--dark-1);
			scale: 1.01;
			transition: scale 0.2s ease-in;

			img {
				outline: 3px solid var(--light-2);
			}

			ul {
				opacity: 1;
			}
		}

		@media (min-width: 430px) {
			padding: 1em;
		}

		@media (min-width: 1130px) {
			grid-template-columns: 15em 1fr;
			grid-template-rows: min-content min-content 1fr min-content;
			min-width: 650px;
			max-width: 860px;
		}
	}

	.empty-element:empty {
		margin: 0;
		padding: 0;
	}

	a {
		color: var(--color-primary);
		text-decoration: none;

		@media (min-width: 1130px) {
			margin: 1em 0 0 1em;
		}

		&:hover {
			color: var(--color-accent-secondary);
		}

		&:focus {
			outline: 3px solid var(--color-accent-secondary);
			border-radius: var(--child-radius);
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
		}
	}

	h3 {
		grid-row: 3;
		line-height: 2.8rem;
		margin: 0 0 0.3em 0;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 1;
		}
	}

	picture {
		grid-row: 1;

		@media (min-width: 1130px) {
			grid-column: 1;
			grid-row: 1 / 4;
			align-self: center;
		}
	}

	img {
		border-radius: var(--child-radius);
		width: 100%;
		max-width: 480px;
		height: auto;
		object-fit: contain;
		object-position: center;
	}

	.date {
		grid-row: 2;
		margin: 0.3em 0 0.3em 0;
		padding: 0.5em 0;
		font-style: italic;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 2;
			margin-left: 1em;
		}
	}

	.description {
		grid-row: 4;
		width: clamp(25ch, 100%, 100ch);
		box-sizing: border-box;
		padding: 0.7em 0.2em;

		@media (min-width: 475px) {
			padding: 0.5em 0;
		}

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 3;
			padding-left: 1em;
		}
	}

	ul {
		grid-row: 5;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		padding: 0;
		list-style-type: none;
		opacity: 0.5;

		@media (min-width: 1130px) {
			grid-row: 4;
			grid-column: 1/3;
		}
	}

	li {
		background-color: var(--color-accent-secondary);
		color: var(--color-dark);
		width: min-content;
		text-wrap: nowrap;
		padding: 0.5em;
		border-radius: var(--child-radius);
		text-align: center;
	} */

	article {
		width: clamp(260px, 100%, 420px);
		container-type: inline-size;

		@media (min-width: 850px) {
			width: clamp(775px, 100%, 875px);
		}
	}

	.card-container {
		--radius: 15px;
		--child-radius: calc(var(--radius) / 2);

		display: grid;
		grid-template-columns: 1fr;
		text-decoration: none;
		color: var(--color-primary);
		border-radius: var(--radius);
		background-color: var(--light-2);
		cursor: pointer;
		box-shadow: 1px 1px 10px 0 var(--dark-2);
		transition: scale 0.2s ease-in;

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
			height: auto;
			object-fit: contain;
			object-position: center;
			border-radius: var(--radius) var(--radius) 0 0;
			margin-bottom: 1rem;
		}

		h3,
		.date,
		.description {
			padding: 0 1rem 1rem 1rem;
		}
	}

	@container (min-width: 775px) {
		article {
			.card-container {
				grid-template-columns: 16em 1fr;
				grid-template-rows: min-content min-content min-content;

				h3 {
					grid-row: 2;
					grid-column: 2;
				}

				picture {
					grid-row: 1 / -1;
				}

				img {
					border-radius: var(--radius) 0 0 var(--radius);
					margin: 0;
				}

				.description {
					grid-column: 2;
					grid-row: 3 / 4;
					width: clamp(260px, 100%, 75ch);
				}
			}
		}
	}
</style>
