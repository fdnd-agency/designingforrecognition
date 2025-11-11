<script>

</script>

<section class="filters">
  <h3>Filteren</h3>
  <div class="checkbox-button">
    <input type="checkbox" id="filter-ideeën" name="projects" value="Ideeën" alt="filter op Ideeën" />
    <label for="filter-ideeën">Ideeën</label>
  </div>

  <div class="checkbox-button">
    <input type="checkbox" id="filter-participatie" name="projects" value="Participatie" alt="filter op Participatie" />
    <label for="filter-participatie">Participatie</label>
  </div>

  <div class="checkbox-button">
    <input type="checkbox" id="filter-experimenten" name="projects" value="Experimenten" alt="filter op Experimenten" />
    <label for="filter-experimenten">Experimenten</label>
  </div> 

  <div class="checkbox-button">
    <input type="checkbox" id="filter-methodes" name="projects" value="Methodes" alt="filter op Methodes" />
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
    transition: ease-in 0.3s;
  }

  .checkbox-button input:checked + label {
    box-shadow:0 1px 0 #ccc, 0 2px 0 #c9c9c9, 
    0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 
    0 6px 1px rgba(0, 0, 0, 0.1), 
    0 0 5px rgba(0, 0, 0, 0.1), 
    0 1px 3px rgba(0, 0, 0, 0.3), 
    0 3px 5px rgba(0, 0, 0, 0.2), 
    0 5px 10px rgba(0, 0, 0, 0.25), 
    0 10px 10px rgba(0, 0, 0, 0.2), 
    0 20px 20px rgba(0, 0, 0, 0.15); 
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