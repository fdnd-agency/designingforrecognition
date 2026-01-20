<script>
	import Logo from '$lib/atoms/Logo.svelte'
	import { onMount } from 'svelte'

	let menuOpen = false
	let scrolled = false

	const closeMenu = () => (menuOpen = true)

	onMount(() => {
		menuOpen = true

		const onScroll = () => {
			scrolled = window.scrollY > 20
			if (!menuOpen) {
				closeMenu()
			}
		}

		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	})
</script>

<header class:scrolled>
	<div class="container-layout">
		<div class="header-mobile">
			<Logo {scrolled} />

			<button
				class="menu-toggle"
				aria-controls="main-navigation"
				aria-expanded={!menuOpen}
				aria-label={!menuOpen ? 'Menu sluiten' : 'Menu open maken'}
				onclick={() => (menuOpen = !menuOpen)}
				class:open-menu-icon={menuOpen}
			>
				<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
					<rect class="top-line" x="0.5" y="2.5" width="11" height="1" /> <rect class="middle-line" x="0.5" y="5.5" width="11" height="1" />
					<rect class="bottom-line" x="0.5" y="8.5" width="11" height="1" />
				</svg>
			</button>
		</div>

		<nav id="main-navigation" class:close-nav={menuOpen} lang="en">
			<ul class="accent-primary">
				<li><a href="/" onclick={closeMenu}>Home</a></li>
				<li><a href="/" onclick={closeMenu}>Projects</a></li>
				<li><a href="/" onclick={closeMenu}>Researchers</a></li>
			</ul>
		</nav>

		{#if !menuOpen}
			<div class="backdrop" onclick={closeMenu} aria-hidden="true"></div>
		{/if}
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		box-shadow: 0 2px 4px #0000001a;
		z-index: 100;
		container: header-nav / inline-size;
	}

	.header-mobile {
		display: flex;
		flex-direction: row;
		position: relative;
		justify-content: space-between;
		background-color: var(--color-accent-secondary);
		padding: var(--spacing-s);
		z-index: 10;
	}

	button {
		width: 3em;
		background-color: inherit;
		border: none;
		cursor: pointer;
		justify-self: end;
		align-self: start;

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

	svg rect {
		transform-box: fill-box;
		transform-origin: center;
		transition:
			transform 0.25s ease-out,
			opacity 0.2s ease-out;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	.open-menu-icon {
		.top-line,
		.bottom-line {
			transform: translateY(0) rotate(0);
		}

		.middle-line {
			opacity: 1;
		}
	}

	nav {
		background-color: var(--color-accent-secondary);
		transform: translateY(0);
		z-index: 9;

		position: absolute;
		left: 0;
		right: 0;
		transition: transform 0.45s ease-out;
		padding: 1em;
	}

	.close-nav {
		transform: translateY(-300%);
		transition: transform 0.45s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		nav,
		.close-nav {
			transition: none;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1em;
		list-style: none;

		a {
			color: var(--color-dark);
			font-weight: bold;
			text-decoration: none;

			background-image: linear-gradient(currentColor, currentColor);
			background-size: 0% 2px;
			background-position: 0 100%;
			background-repeat: no-repeat;

			transition: background-size 0.3s ease;

			&:hover {
				background-size: 100% 2px;
			}
		}
	}

	@media (prefers-reduced-motion: reduce) {
		ul a {
			transition: none;
		}
	}

	.backdrop {
		cursor: pointer;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 8;
	}

	@container header-nav (min-width: 885px) {
		.container-layout {
			display: flex;
			justify-content: space-between;
			align-items: end;
			background-color: var(--color-accent-secondary);
			padding: 1em;
		}

		.header-mobile {
			display: contents;
		}

		button {
			display: none;
		}

		nav {
			position: static;
			transform: translateY(0);
			padding: 0;

			ul {
				display: flex;
				flex-direction: row;
			}
		}

		nav.close-nav {
			transform: translateY(0);
		}

		.backdrop {
			display: none;
		}
	}
</style>
