<script>
    import { TestLinks } from '$lib'
</script>

<h1>Welcome to overview page</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<TestLinks />

<ul class="primary color-mix">
  <li><h2 style="font-weight: 400;">Primary</h2></li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
    <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
</ul>

<ul class="neutral color-mix">
  <li><h2 style="font-weight: 500;" >Neutral</h2></li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
</ul>

<ul class="accent-primary color-mix">
  <li><h2 style="font-weight: 600;" >accent-primary</h2></li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
</ul>

<ul class="accent-secondary color-mix">
  <li><h2 style="font-style: italic;" >accent-secondary</h2></li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
  <li>
    <div></div>
  </li>
</ul>

<style>
ul {
  display: flex;
  flex-direction: row;
  gap: 1em;
  list-style-type: none;

  li:nth-of-type(2) div {
    background-color: var(--dark-3);
  }
  
  li:nth-of-type(3) div {
    background-color: var(--dark-2);
  }
  
  li:nth-of-type(4) div {
    background-color: var(--dark-1);
  }
  
  li:nth-of-type(5) div{
    background-color: var(--color);
    border: 1px solid red;
  }
  
  li:nth-of-type(6) div {
    background-color: var(--light-1);
  }
  
  li:nth-of-type(7) div {
    background-color: var(--light-2);
    border: 1px solid;
  }
}

h2 {
  width: 6em;
}

div {
  height: 5em;
  width: 5em;
/*   border: 2px solid; */
}
</style>

<!-- fonts -->
<h1>H1 element</h1>
<h2>H2 element</h2>
<h3>H3 element</h3>
<h4>H4 element</h4>

<p>Civic Interaction Design is an interdisciplinary research group at the Amsterdam University of Applied Sciences. Together with students, designers, technology developers, policymakers, (local) governments, academic researchers, and citizens, we explore how design & technology can contribute to civic life: the numerous and varied interactions through which people in a society come together to strive towards collective well-being.</p>
