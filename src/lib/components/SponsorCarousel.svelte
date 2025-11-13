<script>
	export let data
	const sponsors = data.sponsors

	const rowClasses = [
		{
			position: 'logo-top',
			animation: 'logo-strip-top'
		},
		{
			position: 'logo-bottom',
			animation: 'logo-strip-bottom'
		}
	]
</script>

<section class="sponsors">
	<header class="title">
		<h2>Onze partners</h2>
	</header>

	<!-- top and bottom row -->
	{#each rowClasses as row}
		<div class={row.position}>
			<ul class={row.animation}>
				{#each sponsors as sponsor}
					<li>
						<img src={`https://fdnd-agency.directus.app/assets/${sponsor.logo}`} alt={sponsor.name} />
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	.sponsors {
		background: var(--oklch-neutral);
		color: var(--color-accent-primary);
		min-height: 57vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-block: 1.5em;
		text-align: center;
		overflow-x: hidden;
	}

	.title {
		padding-bottom: 16px;
	}

	.title h2 {
		color: var(--color-primary);
		line-height: 1.2;
		height: 2em;
	}

	.title h2::after {
		content: '';
		display: block;
		height: 3px;
		width: 64px;
		margin: 12px auto 0;
		background: var(--color-accent-primary);
	}

	/* logo's top en bottom */

	.logo-top,
	.logo-bottom {
		position: relative;
		width: 100%;
		max-width: 100vw;
		overflow: hidden;
		padding-block: 12px;
		border-bottom: 1px solid var(--color-accent-secondary);
		display: flex;
		margin-bottom: 16px;
		background: linear-gradient(to bottom, color-mix(in srgb, var(--color-accent-secondary) 6%, transparent) 0%, transparent 100%);
	}

	.logo-bottom {
		margin-bottom: 0;
		background: linear-gradient(to top, color-mix(in srgb, var(--color-accent-secondary) 6%, transparent) 0%, transparent 100%);
	}

	.logo-strip-top,
	.logo-strip-bottom {
		list-style: none;
		display: flex;
		align-items: center;
		gap: clamp(8px, 1.5vw, 20px);
		padding-inline: 24px;
	}

	.logo-strip-top li,
	.logo-strip-bottom li {
		display: flex;
		align-items: center;
	}

	.logo-strip-top img,
	.logo-strip-bottom img {
		max-height: 5.5em;
		height: auto;
		width: auto;
		object-fit: contain;
	}

	/* Animatie auto carousel */
	.logo-strip-top {
		animation: scroll-left-to-right 30s linear infinite;
	}

	.logo-strip-bottom {
		animation: scroll-right-to-left 30s linear infinite;
	}

	@keyframes scroll-left-to-right {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes scroll-right-to-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.logo-strip-top,
		.logo-strip-bottom {
			animation: none;
			transform: none;
		}
	}
</style>
