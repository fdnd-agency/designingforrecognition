<script>

</script>

<h3>Filteren</h3>





<section class="filters">
    <label for="filter-checkbox">Filter op:</label>

    <div class="checkbox-button">
      <input type="checkbox" id="filter-ideeën" name="projects" value="Ideeën" />
      <label for="filter-ideeën">Ideeën</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="filter-participatie" name="projects" value="Participatie" />
      <label for="filter-participatie">Participatie</label>
    </div>

    <div class="checkbox-button">
      <input type="checkbox" id="filter-experimenten" name="projects" value="Experimenten" />
      <label for="filter-experimenten">Experimenten</label>
    </div> 

    <div class="checkbox-button">
      <input type="checkbox" id="filter-methodes" name="projects" value="Methodes" />
      <label for="filter-methodes">Methodes</label>
    </div> 
</section>


<style>
  .filter-checkbox {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }
   .checkbox-button{
    display: inline-flex;
    align-items: center;
    margin: 8px;
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

  .checkbox-button input:hover + label,
  .checkbox-button input:checked + label {
    background: var( --color-accent-primary);
    border-color: var( --color-accent-primary);
    /* box-shadow: 0 30 blur(60%) 20%; */
    box-shadow: 0 30%(var(--color-dark)) ;
  }
</style>