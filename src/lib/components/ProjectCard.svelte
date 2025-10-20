<script>
	import { fallBackimg } from '$lib';
	export let project;
</script>

<article class="neutral">
	{#if project.title}
		<a href="#"><h3>{project.title}</h3></a>
	{:else}
		<a href="#"><h3><i>Title is missing</i></h3></a>
	{/if}

	<picture>
		<source
			type="image/avif"
			srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=avif&width=250&height=165"
		/>
		<source
			type="image/webp"
			srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=webp&width=250&height=165"
		/>
		<img
			src={fallBackimg}
			width="250px"
			height="165px"
			alt="image die te maken heeft met {project.img}"
			loading="lazy"
		/>
	</picture>

	{#if project.date && !project.end_date}
		<p>{new Date(project.date).getFullYear()}</p>
	{:else if project.date && project.end_date}
		<p>{new Date(project.date).getFullYear()} / {new Date(project.end_date).getFullYear()}</p>
	{:else}
		<p></p>
	{/if}

	{#if project.description}
		<p>{project.description}</p>
	{:else}
		<p><i>Description is missing</i></p>
	{/if}
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, min-content);
		position: relative;
		background-color: var(--light-2);
		color: var(--color-primary);
		border-radius: 15px;
		margin: 1em 0.5em;
		padding: 0.5em;
		max-width: 400px;
		cursor: pointer;
		box-shadow: 1px 1px 10px 0 var(--dark-2);

		&:hover {
			background-color: var(--dark-2);
			outline: 2px solid var(--light-2);
			box-shadow: 1px 1px 5px 10px var(--dark-1);

			img {
				outline: 3px solid var(--light-2);
			}
		}

		@media (min-width: 1130px) {
			grid-template-columns: 13em 1fr;
			grid-template-rows: min-content min-content 1fr;
			min-width: 650px;
			max-width: 860px;
		}
	}

	a {
		color: var(--color-primary);
		text-decoration: none;
		margin-left: 0.3em;

		&:hover {
			color: var(--color-accent-secondary);
		}

		&:focus {
			outline: 3px solid var(--color-accent-secondary);
			border-radius: 5px;
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
			margin: 0 0 0.3em 0.3em;
		}
	}

	picture {
		grid-row: 1;

		@media (min-width: 1130px) {
			grid-column: 1;
			grid-row: 1 / -1;
		}
	}

	img {
		border-radius: 5px;
		width: 100%;
		max-width: 380px;
		height: auto;
		justify-self: center;

		@media (min-width: 1130px) {
			height: 100%;
		}
	}

	p:nth-of-type(1) {
		grid-row: 2;
		margin: 0.3em 0 0.3em 0;
		font-style: italic;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 2;
			margin: 0.3em 0 0.3em 0.7em;
		}
	}

	p:nth-of-type(2) {
		grid-row: 4;
		width: clamp(25ch, 100%, 100ch);
		box-sizing: border-box;
		margin: 0;
		padding: 0 0.2em;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 3;
			margin: 0 0 0 0.5em;
		}
	}
</style>
