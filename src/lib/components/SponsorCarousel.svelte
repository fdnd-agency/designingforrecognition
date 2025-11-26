<script>
	export let sponsorsData
	export let visible = false
	const rowClasses = [
		{
			position: 'logo-top',
			animation: 'logo-strip-top'
		},
		// {
		// 	position: 'logo-bottom',
		// 	animation: 'logo-strip-bottom'
		// }
	]
</script>
<!-- voor de toggle -->
<section class="sponsors" style="display: {visible ? 'flex' : 'none'}">	<header class="title">
		<h2>Onze partners</h2>
	</header>

	<!-- top and bottom row -->
	{#each rowClasses as row}
		<div class={row.position}>
			<ul class={row.animation}>
				{#each sponsorsData as sponsor}
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
		display: flex;
		/* background: linear-gradient(
	to top,
	var(--color-neutral) 0%,    
	var(--oklch-accent-secondary) 100%      
); */


		/* background: var(--oklch-neutral); */
		color: var(--color-accent-primary);
		/* min-height: 57vh; */
		/* display: none; */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* padding-block: 1.5em; */
		text-align: center;
		overflow-x: hidden;
		margin-top: 2em;
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

	.logo-top {
		position: relative;
		width: 100%;
		max-width: 100vw;
		overflow: hidden;
		padding-block: 12px;
		/* border-bottom: 1px solid var(--color-accent-secondary); */
		display: flex;
		/* margin-bottom: 16px; */
		background: linear-gradient(to bottom, color-mix(in srgb, var(--color-accent-secondary) 0%, transparent) 0%, var(--oklch-neutral) 100%);
	}

	.logo-bottom {
		margin-bottom: 0;
		background: linear-gradient(to top, color-mix(in srgb, var(--color-accent-secondary) 6%, transparent) 0%, transparent 100%);
	}

	.logo-strip-top {
		list-style: none;
		display: flex;
		align-items: center;
		gap: clamp(8px, 1.5vw, 20px);
		padding-inline: 24px;
		animation: marquee-left 30s linear infinite;
	}

	.logo-strip-top li {
		display: flex;
		align-items: center;
	}

	.logo-strip-top img {
		max-height: 3.5em;
		height: auto;
		width: auto;
		object-fit: contain;

		@media (min-width: 726px){
			max-height: 5.5em; 
		}
	}

	/* Animatie auto carousel */
	/* .logo-strip-top {
		animation: scroll-left-to-right 30s linear infinite;
	}

	.logo-strip-bottom {
		animation: scroll-right-to-left 30s linear infinite;
	} */

	@keyframes marquee-left {
	0%   { transform: translateX(0); }      /* start meteen zichtbaar */
	100% { transform: translateX(-50%); }   /* schuift eerste helft exact weg */
}

/* optioneel: bestaande .logo-bottom/.logo-strip-bottom mogen blijven staan maar worden niet meer gebruikt */

@media (prefers-reduced-motion: reduce) {
	.logo-strip-top {
		animation: none;
		transform: none;
	}
}
</style>
