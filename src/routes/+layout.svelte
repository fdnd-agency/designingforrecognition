<script>
	import { favicon, FooterInfo, Header, SponsorCarousel } from '$lib'
	let { children, data } = $props()
	const sponsorsData = data.sponsors
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css" />
</svelte:head>

<div class="page-layout">
	<Header />

	<main>
		{@render children?.()}
	</main>

	<FooterInfo {sponsorsData} />
</div>

<style>
	.page-layout {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
	}
</style>
