<script>
	import { favicon, FooterInfo, Header } from '$lib'
	let { children } = $props();
</script>


<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css">
</svelte:head>

<Header />

{@render children?.()}

<FooterInfo/>
