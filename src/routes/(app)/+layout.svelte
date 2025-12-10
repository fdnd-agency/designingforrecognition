<script>
	import { favicon, FooterInfo, Header, SponsorCarousel } from '$lib'
	// export let data
	let { children, data } = $props()
	const sponsorsData = data.sponsors
	// export let data
	// const {data} = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css" />
</svelte:head>

<Header />

{@render children?.()}

<FooterInfo {sponsorsData} />
