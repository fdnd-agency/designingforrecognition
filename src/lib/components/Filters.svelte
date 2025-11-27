<script>
	// export let form;
</script>

<form action="?/filter" method="get">
    <h2>Filteren</h2>

    <!-- Execution groep -->
    <fieldset>
        <legend>Execution</legend>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-concept" name="execution" value="Concept" />
            <label for="filter-concept">Concept</label>
        </div>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-uitgevoerd" name="execution" value="Uitgevoerd" />
            <label for="filter-uitgevoerd">Uitgevoerd</label>
        </div>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-experiment" name="execution" value="Experiment" />
            <label for="filter-experiment">Experiment</label>
        </div>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-methode" name="execution" value="Methode" />
            <label for="filter-methode">Methode</label>
        </div>
    </fieldset>

    <!-- Participation Level groep -->
    <fieldset>
        <legend>Participation Level</legend>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-contestable" name="participation_level" value="Contestable" />
            <label for="filter-contestable">Contestable</label>
        </div>
    </fieldset>

    <!-- Process Phase groep -->
    <fieldset>
        <legend>Process Phase</legend>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-making" name="process_phase" value="Making" />
            <label for="filter-making">Making</label>
        </div>
    </fieldset>

    <!-- Results groep -->
    <fieldset>
        <legend>Results</legend>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-niet-beschikbaar" name="results" value="Niet beschikbaar" />
            <label for="filter-niet-beschikbaar">Niet beschikbaar</label>
        </div>
    </fieldset>

    <!-- Status groep -->
    <fieldset>
        <legend>Status</legend>
        <div class="checkbox-button">
            <input type="checkbox" id="filter-draft" name="status" value="draft" />
            <label for="filter-draft">Draft</label>
        </div>
    </fieldset>

    <button type="submit">Filter</button>
</form>


<style>
	form {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-top: 5em;
	}

	h2 {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: var(--font-size-title-section);
	}

	.checkbox-button {
		display: inline-flex;
		align-items: center;
		margin: 8px;
		font-size: var(--font-size-title-paragraph);
		text-align: center;
	}

	.checkbox-button input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}

	.checkbox-button label {
		display: inline-block;
		padding: 6px 10px;
		border: 1px solid var(--color-accent-primary);
		border-radius: 7.5px;
		background: var(--color-accent-secondary);
		border-color: var(--color-accent-secondary);
		cursor: pointer;
		user-select: none;
	}

	.checkbox-button input:hover + label {
		background: var(--color-accent-primary);
		border-color: var(--color-accent-primary);
		transition: ease-in 0.3s;
	}

	.checkbox-button input:checked + label {
		background: var(--color-accent-primary);
		border-color: var(--color-accent-primary);
		transition: ease-out 0.3s;
		box-shadow:
			0 1px 0 #ccc,
			0 2px 0 #c9c9c9,
			0 3px 0 #bbb,
			0 4px 0 #b9b9b9,
			0 5px 0 #aaa,
			0 6px 1px rgb(0, 0, 0, 0.1),
			0 0 5px rgb(0, 0, 0, 0.1),
			0 1px 3px rgb(0, 0, 0, 0.3),
			0 3px 5px rgb(0, 0, 0, 0.2),
			0 5px 10px rgb(0, 0, 0, 0.25),
			0 10px 10px rgb(0, 0, 0, 0.2),
			0 20px 20px rgb(0, 0, 0, 0.15);
	}

	@media (max-width: 320px) {
		form {
			flex-direction: column;
		}
		label:nth-of-type(1) {
			margin-bottom: 8px;
		}
		.checkbox-button {
			display: flex;
			justify-content: center;
		}
	}

	@media (min-width: 321px) {
		form {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}
		.checkbox-button {
			display: flex;
			justify-content: center;
		}
	}
</style>
