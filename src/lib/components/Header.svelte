<script>
	import Logo from './components/Logo.svelte';

	// Menu functionality
	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);
	const closeMenu = () => (isMenuOpen = false);
</script>

<header>
	<nav>
		<Logo />
		<button
			type="button"
			class="menu-mobile"
			on:click={toggleMenu}
			aria-label="Toggle menu"
			aria-expanded={isMenuOpen}
			aria-controls="main-menu">
			<span class:open={isMenuOpen}></span>
			<span class:open={isMenuOpen}></span>
			<span class:open={isMenuOpen}></span>
		</button>
		<ul id="main-menu" class:open={isMenuOpen}>
			<li><a href="/" on:click={closeMenu}>Home</a></li>
			<li><a href="/projects" on:click={closeMenu}>Projects</a></li>
			<li><a href="/researcher" on:click={closeMenu}>Researchers</a></li>
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
		font-family: var(--font-size-primary);
	}

	nav {
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

	/* Mobile  */
	@media (max-width: 544px) {
		nav ul {
			display: none;
			flex-direction: row;
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

	a:focus,
	a:hover {
		color: var(--color-accent-primary);
	}

	.menu-mobile {
		display: inline-flex;
		flex-direction: column;
		gap: 4px;
		width: 36px;
		height: 36px;
		padding: 6px;
		border: none;
		background: transparent;
		cursor: pointer;
	}

	.menu-mobile span {
		display: block;
		height: 2px;
		background: var(--color-dark);
		border-radius: 2px;
		transition:
			transform 0.25s ease,
			opacity 0.25s ease;
	}

	.menu-mobile span.open:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}
	.menu-mobile span.open:nth-child(2) {
		opacity: 0;
	}
	.menu-mobile span.open:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	/* Mobile behavior: hide menu, show when .open */
	@media (max-width: 544px) {
		.menu-mobile {
			display: inline-flex;
		}

		nav ul {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--color-accent-secondary);
			flex-direction: column;
			gap: 0;
			padding: 1rem 1.5rem;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		}

		nav ul.open {
			display: flex;
		}

		nav ul li {
			padding: 0.5rem 0;
		}
	}

	/* Tablet + Desktop: hide hamburger menu and show buttons*/
	@media (min-width: 545px) {
		.menu-mobile {
			display: none;
		}
	}
</style>
