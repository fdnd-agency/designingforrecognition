<script>
	import favicon from '$lib/assets/favicon.svg';
	import Logo from '$lib/components/Logo.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<Logo />
<Header />
<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="styles/styleguide.css" />
</svelte:head>

{@render children?.()}
