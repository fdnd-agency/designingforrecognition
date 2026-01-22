<script lang="ts">
	import { filterProjects } from '$lib/remote-functions/filterProjects.remote'
	import { tick } from 'svelte'

	let { projectCount } = $props()

	// Syncs checkbox states with the active filters that is returned from the server. (selected filters stay selected after filtering)
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

	// Clears all selected filter checkboxes, works with onClick
	function resetFilters() {
		document.querySelectorAll('input[type="checkbox"]').forEach((element) => {
			if (element instanceof HTMLInputElement) {
				element.checked = false
			}
		})
	}

	// Smoothly scrolls to the project card section, respecting reduced-motion preferences, works with onClick
	function scrollTo() {
		setTimeout(() => {
			const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			if (reduceMotion) return

			document.getElementById('project-container')?.scrollIntoView({ behavior: 'smooth' })
		}, 1000)
	}
</script>

<div class="form-container">
	<p class="skip-link">
		<a href="#project-container">Skip Naar projecten</a>
	</p>

	<form {...filterProjects}>
		<h2>Filteren</h2>

		<fieldset>
			<ul class="form-labels">
				{#each ['Concept', 'Uitgevoerd', 'Experiment', 'Methode'] as value}
					<li>
						<input id={`${value}`} {...filterProjects.fields.execution.as('checkbox', value)} />
						<label for={`${value}`}>{value}</label>
					</li>
				{/each}

				<li>
					<input id="Contestable" {...filterProjects.fields.Participation_level.as('checkbox', 'Contestable')} />
					<label for="Contestable"> Contestable </label>
				</li>

				<li>
					<input id="Making" {...filterProjects.fields.Process_phase.as('checkbox', 'Making')} />
					<label for="Making"> Making </label>
				</li>
				<li>
					<input id="Niet-beschikbaar" {...filterProjects.fields.results.as('checkbox', 'Niet beschikbaar')} />
					<label for="Niet-beschikbaar"> Niet beschikbaar </label>
				</li>
				<li>
					<input id="Draft" {...filterProjects.fields.status.as('checkbox', 'draft')} />
					<label for="Draft"> Draft </label>
				</li>
			</ul>

			<ul class="form-buttons">
				<li>
					<button onclick={resetFilters}>
						<span>Reset filters</span>
						<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M3.06 13a9 9 0 1 0 .49 -4.087" /><path d="M3 4.001v5h5" /><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg >
					</button>
				</li>
				<li>
					<button type="submit" onclick={scrollTo}>
						<span>Activeer filters</span>
						<svg width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" /></svg >
					</button>
				</li>
			</ul>
		</fieldset>
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
		margin: var(--spacing-l) 2em var(--spacing-m) 2em;
		gap: var(--spacing-s);

		h2 {
			align-self: center;
			margin-bottom: var(--spacing-s);
		}

		fieldset {
			border: none;
			align-self: center;
			width: 100%;
		}
	}

	.form-labels {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-s);
		list-style: none;

		li {
			input:checked + label {
				outline: 3px solid var(--color-dark);
			}

			label {
				transition: background-color 0.2s ease-out;
				background-color: var(--color-accent-secondary);
				transform-origin: center;
				height: 100%;

				&:active {
					transform: scale(0.9);
					transition: transform 0.05s ease-out;
				}
			}

			label:hover,
			input:focus-visible + label {
				background-color: var(--color-accent-primary);
			}

			input {
				position: absolute;
				opacity: 0;
				pointer-events: none;
				clip-path: 0;
			}
		}
	}

	label,
	button {
		display: flex;
		font-size: 1.3rem;
		padding: 0.5em;
		min-width: 140px;
		min-height: 52px;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: var(--color-dark);
		cursor: pointer;
	}

	.form-buttons {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
		margin-top: var(--spacing-s);
		gap: var(--spacing-s);
		list-style: none;

		li {
			flex: 1 1 0;
			display: flex;
			justify-content: stretch;

			button {
				width: 100%;
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
	}

	.filter-results {
		opacity: 0;
		position: absolute;
	}

	@container filters (min-width: 545px) {
		.form-labels {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}

		.form-buttons span {
			margin-right: 0.3rem;
		}
	}

	@container filters (min-width: 695px) {
		.form-labels {
			display: flex;
			flex-wrap: wrap;
			gap: var(--spacing-s);

			li {
				flex: 1 1 200px;
				display: flex;
			}

			label {
				width: 100%;
				min-width: 0;
			}
		}

		.form-buttons {
			li:first-child {
				justify-content: end;
			}

			li button {
				width: 100%;
				min-width: 307px;
				max-width: 415px;
			}
		}
	}

	@container filters (min-width: 913px) {
		.form-buttons li button {
			min-width: 200px;
			width: clamp(200px, 22cqi, 265px);
		}
	}

	@container filters (min-width: 1128px) {
		.form-labels {
			display: grid;
			grid-template-columns: repeat(4, minmax(0, 265px));
			gap: var(--spacing-s);
			justify-content: center;

			li {
				display: block;
				flex: initial;
				width: clamp(200px, 22cqi, 265px);
			}

			li label {
				width: clamp(200px, 22cqi, 265px);
			}
		}
	}
</style>
