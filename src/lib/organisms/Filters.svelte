<script>
	import { filterProjects } from '$lib/remote-functions/filter.remote'
	import { onMount, tick } from 'svelte'
	import { goto } from '$app/navigation'

	let { projectCount } = $props()

	onMount(() => {
		$effect(async () => {
			const filters = filterProjects.result?.data?.activeFilters
			if (!filters) return

			await tick()

			const activeValues = Object.values(filters).flat()

			document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
				input.checked = activeValues.includes(input.value)
			})
		})
	})

	function resetFilters() {
		document.querySelectorAll('input[type="checkbox"]').forEach((filter) => (filter.checked = false))
	}
</script>

<div class="form-container">
	<p class="skip-link">
		<a href="#project-container">klik enter om filters over te slaan en naar projecten te gaan</a>
	</p>

	<form {...filterProjects}>
		<h2>Filteren</h2>

		<p class="keyboard-info">Klik op de spatiebalk om het filter aan te vinken</p>

		<fieldset>
			{#each ['Concept', 'Uitgevoerd', 'experiment', 'Methode'] as value}
				<label>
					<input {...filterProjects.fields.execution.as('checkbox', value)} />
					{value}
				</label>
			{/each}

			<label>
				<input {...filterProjects.fields.Participation_level.as('checkbox', 'Contestable')} />
				Contestable
			</label>

			<label>
				<input {...filterProjects.fields.Process_phase.as('checkbox', 'Making')} />
				Making
			</label>

			<label>
				<input {...filterProjects.fields.results.as('checkbox', 'Niet beschikbaar')} />
				Niet beschikbaar
			</label>

			<label>
				<input {...filterProjects.fields.status.as('checkbox', 'draft')} />
				Draft
			</label>
		</fieldset>

		<div class="form-buttons">
			<button>Activeer filters</button>
			<button on:click={resetFilters}>Reset filters</button>
		</div>
	</form>

	<p class="filter-results">{projectCount} projecten gevonden</p>
</div>

<style>
	.form-container {
		container: filters / inline-size;
	}

	.skip-link {
		position: absolute;
		top: 4em;
		left: 1em;
		background-color: var(--color-accent-primary);
		padding: 0.5em;
		border-radius: 20px;
		opacity: 0;
		pointer-events: none;

		&:focus-within {
			opacity: 1;
		}

		a {
			color: var(--color-dark);
			text-decoration: none;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5em 2em 2em 2em;
		gap: 2em;
	}

	.keyboard-info {
		padding: 0.5em;
		font-size: 1.3rem;
		background: var(--color-accent-secondary);
		color: var(--color-dark);
		border-radius: 20px;
		white-space: nowrap;
		opacity: 0;
	}

	form:has(input:focus-visible) .keyboard-info {
		opacity: 1;
	}

	fieldset {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border: none;
		gap: 0.5em;
	}

	label {
		transition: background-color 0.2s ease-out;
		position: relative;

		input {
			position: absolute;
			opacity: 0;
			pointer-events: none;
		}
	}

	label,
	button {
		font-size: 1.3rem;
		padding: 0.5em;
		border-radius: 20px;
		text-align: center;
		align-self: center;
		background-color: var(--color-accent-secondary);
		color: var(--color-dark);
		cursor: pointer;

		&:has(input:checked),
		&:has(input:focus-visible),
		&:hover,
		&:focus-visible {
			background-color: var(--color-accent-primary);
			transition: background-color 0.2s ease-out;
		}
	}

	.form-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5em;

		button {
			border: none;

			&:nth-of-type(1) {
				margin-bottom: 1.2em;
			}
		}
	}

	.filter-results {
		opacity: 0;
	}

	@container filters (min-width: 545px) {
		fieldset {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			gap: 2em;
		}
	}
</style>
