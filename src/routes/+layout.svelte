<script>
	import favicon from '$lib/assets/favicon.svg';
	import Logo from "$lib/components/Logo.svelte";
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();

	// dit is voorbeeld voor header dus vervang SponsorCarousel met de header component
	import {  } from '$lib'

</script>
<Logo />
<Header />
<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css">
</svelte:head>

<!-- header component moet hier komen -->
<!-- <SponsorCarousel/> -->

{@render children?.()}


<!-- hier kan je de styling zetten -->
<style></style>
