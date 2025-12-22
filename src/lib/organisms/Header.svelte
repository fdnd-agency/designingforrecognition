<script>
	import Logo from '$lib/atoms/Logo.svelte'

	// Menu functionality
	let isMenuOpen = false
	const toggleMenu = () => (isMenuOpen = !isMenuOpen)
	const closeMenu = () => (isMenuOpen = false)
</script>

<header>
	<Logo />

	<!-- <nav>
		<button>---</button>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/researcher">Researchers</a></li>
		</ul>
	</nav> -->
</header>

<style>
</style>
