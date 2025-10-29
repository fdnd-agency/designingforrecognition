<script>
  // export let ilters = [];
</script>

<h3>Filteren</h3>





<section class="filters">
  <label for="sort-select">Sorteren op:</label>
  <div class="Casestudy">
    <label for="casestudy-checkbox">Case Study:</label>

    <div class="checkbox-button">
      <input type="checkbox" id="casestudy-beeldherkenning" name="casestudy" value="Beeldherkenning" />
      <label for="casestudy-beeldherkenning">Beeldherkenning</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="casestudy-parkeerscanauto" name="casestudy" value="Parkeerscanauto" />
      <label for="casestudy-parkeerscanauto">Parkeerscanauto</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="casestudy-parkeerscanfiets" name="casestudy" value="Parkeerscanfiets" />
      <label for="casestudy-parkeerscanfiets">Parkeerscanfiets</label>
    </div> 
  </div>

  <div class="Execution">
    <label for="execution-checkbox">Uitvoering:</label>

    <div class="checkbox-button">
      <input type="checkbox" id="execution-concept" name="execution" value="Concept" />
      <label for="execution-concept">Concept</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="execution-uitgevoerd" name="execution" value="Uitgevoerd" />
      <label for="execution-uitgevoerd">Uitgevoerd</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="execution-experiment" name="execution" value="Experiment" />
      <label for="execution-experiment">Experiment</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="execution-methode" name="execution" value="Methode" />
      <label for="execution-methode">Methode</label>
    </div>
  </div>

  <div class="Results">
    <label for="results-select">Resultaten:</label>

    <div class="radio-button">
      <input type="radio" id="results-all" name="results" value="all" />
      <label for="results-all">Alle resultaten</label>
    </div>

    <div class="radio-button">
      <input type="radio" id="results-available" name="results" value="available" />
      <label for="results-available">Beschikbaar</label>
    </div>

    <div class="radio-button">
      <input type="radio" id="results-unavailable" name="results" value="unavailable" />
      <label for="results-unavailable">Niet beschikbaar</label>
    </div>
  </div>

  <div class="select-group process-phase">
    <label for="process-phase-select">Procesfase:</label>
    <div class="select-wrapper">
      <select name="process-phase" id="process-phase-select" required>
        <option value="">Kies een procesfase</option>
        <option value="evaluating">Evaluatie</option>
        <option value="deployment">Deployment</option>
        <option value="articulating">Articulating</option>
        <option value="making">Making</option>
      </select>
    </div>
  </div>

  <div class="select-group participation">
    <label for="participation-select">Participatie niveau:</label>
    <div class="select-wrapper">
      <select name="participation-level" id="participation-select" required>
        <option value="">Kies een niveau</option>
        <option value="transparency">Transparantie</option>
        <option value="actionable">Actiegericht</option>
        <option value="legible">Leesbaar</option>
        <option value="relatable">Herkenbaar</option>
        <option value="contestable">Betwistbaar</option>
      </select>
    </div>
  </div>
</section>


<style>
  div {
    margin: 20px;
  }
</style>