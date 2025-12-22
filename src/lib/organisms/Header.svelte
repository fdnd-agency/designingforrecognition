<script>
	import Logo from '$lib/atoms/Logo.svelte'

	let openNav = false
</script>

<header>
	<div class="header-mobile">
		<Logo />

		<button class="menu-toggle" aria-label="Toggle menu" aria-expanded={openNav} on:click={() => (openNav = !openNav)} class:open-menu-icon={openNav}>
			<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
				<rect class="top-line" x="0.5" y="2.5" width="11" height="1" />
				<rect class="middle-line" x="0.5" y="5.5" width="11" height="1" />
				<rect class="bottom-line" x="0.5" y="8.5" width="11" height="1" />
			</svg>
		</button>
	</div>

	<nav class:open-nav={openNav}>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/researcher">Researchers</a></li>
		</ul>
	</nav>
</header>

<style>
	.header-mobile {
		display: flex;
		flex-direction: row;
		position: relative;
		justify-content: space-between;
		background-color: var(--color-accent-secondary);
		padding: 1em;
		z-index: 10;
	}

	button {
		width: 3em;
		background-color: inherit;
		border: none;
		cursor: pointer;
		justify-self: end;
		align-self: start;
	}

	svg rect {
		transform-box: fill-box;
		transform-origin: center;
		transition:
			transform 0.25s ease-out,
			opacity 0.2s ease-out;
	}

	.open-menu-icon {
		.top-line {
			transform: translateY(3px) rotate(45deg);
		}

		.middle-line {
			opacity: 0;
		}

		.bottom-line {
			transform: translateY(-3px) rotate(-45deg);
		}
	}

	nav {
		background-color: var(--color-accent-secondary);
		transform: translateY(-300%);
		position: absolute;
		left: 0;
		right: 0;
		transition: transform 0.45s ease-out;
		padding: 1em;
	}

	.open-nav {
		/* position: static; */
		transform: translateY(0);
		transition: transform 0.45s ease-out;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1em;
		list-style: none;

		a {
			text-decoration: none;
			color: var(--color-dark);
			font-weight: bold;
		}
	}
</style>
