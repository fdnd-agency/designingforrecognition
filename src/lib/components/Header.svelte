<script>
  import Logo from '$lib/components/Logo.svelte';
  let isMenuOpen = false;
  const toggleMenu = () => isMenuOpen = !isMenuOpen;
</script>

<header> 
  <nav>
    <Logo />
    <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/Projects">Projects</a></li>
      <li><a href="/Researchers">Researchers</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-accent-secondary);
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }

  .hamburger span {
    width: 30px;
    height: 3px;
    background: var(--color-dark);
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  @media (max-width: 470px) {
    .hamburger {
      display: flex;
    }
  }
  @media (max-width: 471px) {
    nav ul {
      display: none;
      transition: ease-in-out 2s;
      opacity: 0;
    }
    .hamburger {
      display: none;
    }
  }
  
  ul {
    padding-top: 5em;
  }

  a {
    text-decoration: none;
    color: var(--color-dark);
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  a:hover {
      color: var(--color-accent-primary);
    }
</style>