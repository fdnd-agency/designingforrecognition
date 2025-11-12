<script>
	import { fallBackimg } from '$lib';
	export let project;
</script>

<article class="neutral">
	{#if project.title}
		<a href="/project-{project.slug}"><h3>{project.title}</h3></a>
	{:else}
		<a href="/project-{project.slug}"><h3><i>Title is missing</i></h3></a>
	{/if}

	<picture>
		<source
			type="image/avif"
			srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=avif&width=270&height=250"
		/>
		<source
			type="image/webp"
			srcset="https://fdnd-agency.directus.app/assets/{project.img}?format=webp&width=250&height=165"
		/>
		<img
			src={fallBackimg}
			width="270px"
			height="250px"
			alt="image die te maken heeft met {project.img}"
			loading="lazy"
		/>
	</picture>

	{#if project.date && !project.end_date}
		<p>{new Date(project.date).getFullYear()}</p>
	{:else if project.date && project.end_date}
		<p>{new Date(project.date).getFullYear()} / {new Date(project.end_date).getFullYear()}</p>
	{:else}
		<p class="empty-element"></p>
	{/if}

	{#if project.description}
		<p>{project.description}</p>
	{:else}
		<p><i>Description is missing</i></p>
	{/if}

	<ul>
		{#if project.case_study}
			{#each project.case_study as case_study}
				<li>{case_study}</li>
			{/each}
		{/if}

		{#if project.results}
			<li>{project.results}</li>
		{/if}

		{#if project.Process_phase}
			<li>{project.Process_phase}</li>
		{/if}

		{#if project.Participation_level}
			<li>{project.Participation_level}</li>
		{/if}

		{#if project.execution}
			{#each project.execution as execution}
				<li>{execution}</li>
			{/each}
		{/if}
	</ul>
</article>

<style>
	article {
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

		&:hover, &:focus-within {
			background-color: var(--dark-2);
			outline: 2px solid var(--light-2);
			box-shadow: 1px 1px 5px 10px var(--dark-1);
			scale: 1.01;

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

	p:nth-of-type(1) {
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

	p:nth-of-type(2) {
		grid-row: 4;
		width: clamp(25ch, 100%, 100ch);
		box-sizing: border-box;
		margin: 0;
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
	}
</style>
