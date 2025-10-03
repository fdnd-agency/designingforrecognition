<script>
    import { TestLinks } from '$lib'
</script>

<h1>Welcome to overview page</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<TestLinks />

<ul class="primary">
  <li><h2>Primary</h2></li>
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

<ul class="neutral">
  <li><h2>Neutral</h2></li>
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

<ul class="accent-primary">
  <li><h2>accent-primary</h2></li>
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

<ul class="accent-secondary">
  <li><h2>accent-secondary</h2></li>
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
  width: 5em;
}

div {
  height: 5em;
  width: 5em;
/*   border: 2px solid; */
}
</style>