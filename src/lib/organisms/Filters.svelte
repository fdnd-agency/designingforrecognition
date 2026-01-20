<script lang="ts">
	import { filterProjects } from '$lib/remote-functions/filter.remote'
	import { tick } from 'svelte'

	let { projectCount } = $props()

	$effect(() => {
		;(async () => {
			const filters = filterProjects.result?.data?.activeFilters
			if (!filters) return

			await tick()

			const activeValues = Object.values(filters).flat()

			document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach((input) => {
				input.checked = activeValues.includes(input.value)
			})
		})()
	})

	function resetFilters() {
		document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
			if (element instanceof HTMLInputElement) {
				element.checked = false
			}
		})
	}
</script>

<div class="form-container">
	<p class="skip-link">
		<a href="#project-container">klik enter om filters over te slaan en naar projecten te gaan</a>
	</p>

	<form {...filterProjects}>
		<h2>Filteren</h2>

		<fieldset>
			<ul>
				{#each ['Concept', 'Uitgevoerd', 'Experiment', 'Methode'] as value}
					<li>
						<label>
							<input {...filterProjects.fields.execution.as('checkbox', value)} />
							{value}
						</label>
					</li>
				{/each}

				<li>
					<label>
						<input {...filterProjects.fields.Participation_level.as('checkbox', 'Contestable')} />
						Contestable
					</label>
				</li>

				<li>
					<label>
						<input {...filterProjects.fields.Process_phase.as('checkbox', 'Making')} />
						Making
					</label>
				</li>
				<li>
					<label>
						<input {...filterProjects.fields.results.as('checkbox', 'Niet beschikbaar')} />
						Niet beschikbaar
					</label>
				</li>
				<li>
					<label>
						<input {...filterProjects.fields.status.as('checkbox', 'draft')} />
						Draft
					</label>
				</li>
			</ul>
		</fieldset>

		<div class="form-buttons">
			<button>Activeer filters</button>
			<button onclick={resetFilters}>Reset filters</button>
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
		top: 5em;
		left: 1em;
		background-color: var(--color-accent-primary);
		padding: 0.5em;
		border-radius: 20px;
		opacity: 0;
		pointer-events: none;
		outline: 3px solid currentColor;

		&:focus-within {
			opacity: 1;
		}

		a {
			color: var(--color-dark);
			text-decoration: none;
			outline: none;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: var(--spacing-l) 2em var(--spacing-m) 2em;
		gap: var(--spacing-s);

		h2 {
			margin-bottom: var(--spacing-s);
		}
	}

	form:has(input:focus-visible) .keyboard-info {
		opacity: 1;
	}

	fieldset {
		border: none;

		ul {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-s);
			list-style: none;

			li {
				display: contents;
			}
		}
	}

	label {
		transition: background-color 0.2s ease-out;
		position: relative;
		background-color: var(--color-accent-secondary);
		width: clamp(6em, 100%, 9.5em);
		transform-origin: center;

		&:has(input:focus-visible),
		&:hover,
		&:focus-visible {
			background-color: var(--color-accent-primary);
			transition: background-color 0.3s ease-out;
		}

		&:has(input:checked) {
			background-color: var(--color-accent-primary);
			outline: 3px solid var(--color-dark);
		}

		&:active {
			transform: scale(0.9);
			transition: transform 0.05s ease-out;
		}

		input {
			position: absolute;
			opacity: 0;
			pointer-events: none;
		}
	}

	label,
	button {
		display: block;
		font-size: 1.3rem;
		padding: 0.5em;
		min-height: 52px;
		border-radius: 20px;
		text-align: center;
		align-self: center;
		color: var(--color-dark);
		cursor: pointer;
	}

	.form-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-s);

		button {
			width: 9.5em;
			border: none;
			background-color: var(--color-accent-primary);

			&:hover,
			&:focus-visible {
				scale: 1.05;
			}

			&:active {
				scale: 1;
			}
		}
	}

	.filter-results {
		opacity: 0;
		position: absolute;
	}

	@container filters (min-width: 545px) {
		fieldset ul {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}

		.form-buttons {
			flex-direction: row;
		}
	}
</style>
