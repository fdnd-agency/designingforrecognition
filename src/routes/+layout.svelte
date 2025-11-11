<script>
	import favicon from '$lib/assets/favicon.svg';
	import FooterInfo from "$lib/components/FooterInfo.svelte";
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();

	// dit is voorbeeld voor header dus vervang SponsorCarousel met de header component
	import {  } from '$lib'

</script>


<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css">
</svelte:head>

<!-- header component moet hier komen -->
<!-- <SponsorCarousel/> -->

<Header />
{@render children?.()}

<FooterInfo/>

<!-- hier kan je de styling zetten -->
<style></style>
