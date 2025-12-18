<script>
	export let filter
	export let projectCount
</script>

<div class="form-container">
	<p class="sr-only" aria-live="polite">
		{projectCount} <a href="#project-container">projecten gevonden klik enter om filters over te slaan en naar projecten te gaan</a>
	</p>

	<form {...filter}>
		<h2>Filteren</h2>

		<p class="keyboard-info">Druk op spatie om filter te schakelen</p>

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

		<button>Activeer filters</button>
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
