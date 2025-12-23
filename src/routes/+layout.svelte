<script>
	import { favicon, FooterInfo, Header, SponsorCarousel } from '$lib'
	let { children, data } = $props()
	const sponsorsData = data.sponsors
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css" />
</svelte:head>

<Header />

{@render children?.()}

<FooterInfo {sponsorsData} />
