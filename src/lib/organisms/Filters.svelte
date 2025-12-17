<script>
	import { onMount } from 'svelte'
	export let filter

	onMount(() => {
		const form = document.querySelector('form')
		if (!form) return

		const inputs = form.querySelectorAll('input[type="checkbox"]')

		inputs.forEach((input) => {
			input.addEventListener('change', () => {
				form.requestSubmit()
			})
		})
	})
</script>

<div class="form-container">
	<form {...filter}>
		<h2>Filteren</h2>

		<fieldset>
			{#each ['Concept', 'Uitgevoerd', 'experiment', 'Methode'] as value}
				<label>
					<input {...filter.fields.execution.as('checkbox', value)} />
					{value}
				</label>
			{/each}

			<label>
				<input {...filter.fields.Participation_level.as('checkbox', 'Contestable')} />
				Contestable
			</label>

			<label>
				<input {...filter.fields.Process_phase.as('checkbox', 'Making')} />
				Making
			</label>

			<label>
				<input {...filter.fields.results.as('checkbox', 'Niet beschikbaar')} />
				Niet beschikbaar
			</label>

			<label>
				<input {...filter.fields.status.as('checkbox', 'draft')} />
				Draft
			</label>
		</fieldset>

		<button>Reset Filters</button>
	</form>
</div>

<style>
	.form-container {
		container: filters / inline-size;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5em 2em 2em 2em;
		gap: 2.5em;
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

	label:has(input:focus-visible)::after {
		content: 'Druk op spatie om filter te schakelen';
		position: absolute;
		bottom: 115%;
		left: 0;
		margin-top: 0.4rem;
		padding: 0.4rem;
		font-size: 0.9rem;
		background: var(--color-dark);
		color: white;
		border-radius: 10px;
		white-space: nowrap;
		z-index: 10;
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

		&:has(input:checked),
		&:has(input:focus-visible),
		&:hover,
		&:focus-visible {
			background-color: var(--color-accent-primary);
			transition: background-color 0.2s ease-out;
		}
	}

	button {
		border: none;
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
