<script>
	import { favicon, FooterInfo, Header } from '$lib'
	let { children, data } = $props()
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

	<FooterInfo sponsorsData={data.sponsors} />
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
