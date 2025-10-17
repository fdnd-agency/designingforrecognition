<script>
  import Logo from '$lib/components/Logo.svelte';
</script>

<header>
  <nav>
    <Logo />
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/Projects">Projects</a></li>
      <li><a href="/Researchers">Researchers</a></li>
    </ul>
  </nav>
</header>

<style>
  @media (min-width: 320px) {

    nav ul {
      flex-direction: row;
    }
  }

  header {
    position: fixed;
    display: flex;
    align-items: center;
    background-color: var(--color-accent-secondary);
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }
</style>