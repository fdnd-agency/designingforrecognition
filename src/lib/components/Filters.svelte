<script>

</script>

<section class="filters">
  <h3>Filteren</h3>
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

  h3 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: var(--font-size-title-section);
  }
  .filters {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 12px;
  }
   .checkbox-button{
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

  .checkbox-button input:hover + label,
  .checkbox-button input:checked + label {
    background: var( --color-accent-primary);
    border-color: var( --color-accent-primary);
  }

  @media  (max-width: 320px) {
    .filters {
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

  @media (min-width: 321px) and (max-width: 375px) {
    .filters {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .checkbox-button {
      display: flex;
      justify-content: center;
    }
  }

  @media (min-width: 376px) {
    .filters {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>