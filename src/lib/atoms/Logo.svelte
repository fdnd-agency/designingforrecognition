<script>
	export let scrolled
</script>

<a href="/" aria-label="Home - Designing for Recognition" lang="en">
	<span class="logo-container" aria-hidden="true" class:scrolled>
		<span class="logo-text full">
			<span>Designing</span>
			<span>for</span>
			<span>Recognition</span>
		</span>

		<span class="logo-text short" aria-hidden="true">DFR</span>
	</span>
</a>

<style>
	a {
		display: block;
		width: 100%;
		max-width: 590px;
		text-decoration: none;
	}

	.logo-container {
		display: block;
		width: 100%;
		container-name: row-logo;
		container-type: inline-size;
	}

	.logo-text {
		--gradient: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(13, 56, 79, 1) 15%, rgba(139, 203, 189, 1) 50%);

		display: flex;
		flex-direction: column;
		gap: 0.25em;
		background: var(--gradient);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-transform: uppercase;
		font-size: clamp(1rem, calc(4vw + 1rem), 2.5rem);
		font-weight: bold;
		line-height: 1.1;
	}

	.logo-text.short {
		--gradient: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(13, 56, 79, 1) 5%, rgba(139, 203, 189, 1) 13%);
		display: none;
	}

	@container row-logo (min-width: 590px) {
		.logo-text {
			flex-direction: row;
		}
	}

	@media (max-width: 692px) {
		.logo-container.scrolled .logo-text.full {
			display: none;
		}

		.logo-container.scrolled .logo-text.short {
			display: block;
		}
	}
</style>
