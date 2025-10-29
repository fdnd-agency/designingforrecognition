<script>
  // export let ilters = [];
</script>

<h3>Filteren</h3>





<section class="filters">
  <label for="sort-select">Sorteren op:</label>
  <div class="Casestudy">
    <label for="casestudy-checkbox">Case Study:</label>
    <div class="beeldherkenning">
      <label for="Beeldherkenning">Beeldherkenning</label>
      <input type="checkbox" name="Beeldherkenning" id="casestudy" value="Beeldherkenning" />
    </div>  
    <div class="parkeerscanauto">
      <label for="Parkeerscanauto">Parkeerscanauto</label>
      <input type="checkbox" name="Parkeerscanauto" id="casestudy" value="Parkeerscanauto" />
    </div> 
    <div class="parkeerscanfiets">
      <label for="Parkeerscanfiets">Parkeerscanfiets</label>
      <input type="checkbox" name="Parkeerscanfiets" id="casestudy" value="Parkeerscanfiets" />
    </div> 
  </div>

  <div class="Execution">
    <label for="execution-checkbox">Uitvoering:</label>
    <div class="Concept">
      <label for="Concept">Concept</label>
      <input type="checkbox" name="Concept" id="concept" value="Concept" />
    </div>
    <div class="execution-uitgevoerd">
      <label for="Uitgevoerd">Uitgevoerd</label>
      <input type="checkbox" name="Uitgevoerd" id="execution2" value="Uitgevoerd" />
    </div>
    <div class="execution-experiment">
      <label for="Experiment">Experiment</label>
      <input type="checkbox" name="Experiment" id="execution3" value="Experiment" />
    </div>
    <div class="execution-methode">
      <label for="Methode">Methode</label>
      <input type="checkbox" name="Methode" id="execution3" value="Methode" />
    </div>
  </div>

  <div class="Results">
    <label for="results-select">Resultaten:</label>
    <div class="all-results">
      <label for="alle-resultaten"> Alle resultaten</label>
      <input type="radio" name="alle resultaten" id="results" />
    </div>
    <div class="beschikbaar">
      <label for="beschikbaar"> Beschikbaar</label>
      <input type="radio" name="beschikbaar" id="results" />
    </div>
    <div class="niet-beschikbaar">
      <label for="niet-beschikbaar">Niet beschikbaar</label>
    <input type="radio" name="niet beschikbaar" id="results">
    </div>
  </div>

  <div class="process-phase">
    <label for="process-phase">Procesfase:</label>
    <select name="process-phase" id="process-phase-select">
      <option value="Evaluating">Evaluatie</option>
      <option value="Deployment">Deployment</option>
      <option value="Articulating">Articulating</option>
      <option value="Making">Making</option>
    </select>
  </div>

  <div class="participation-level">
    <label for="participation-level">Participatie niveau:</label>
    <select name="participation-level" id="Participation_level">
      <option value="Transparency">Transparantie</option>
      <option value="Actionable">Actiegericht</option>
      <option value="Legible">Leesbaar</option>
      <option value="Relatable">Herkenbaar</option>
      <option value="Contestable">Betwistbaar</option>
    </select>
  </div>
</section>


<style>
  /* section .Casestudy, .Execution {
    display: flex;
    gap: 2rem;
  } */
  div {
    margin: 20px;
  }
</style>