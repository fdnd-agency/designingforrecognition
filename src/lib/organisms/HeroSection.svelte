<script>
	//@ts-nocheck

	export let project
	export let callout

	const BASE = 'https://fdnd-agency.directus.app/assets'

	const getId = (x) => x?.img?.id || x?.img

	const heroId = getId(project)
	const calloutId = getId(callout)

	function limitSentences(text, max) {
		if (!text) return ''
		return text.split('.').slice(0, max).join('.')
	}

	const shortHeroText = limitSentences(project?.description, 3)
	const shortCalloutText = limitSentences(callout?.description, 2)

	const fallbackImg = 'https://placehold.co/570x250'

	const assetUrl = (id, { format, width, height }) =>
		`${BASE}/${id}?format=${format}&width=${width}&height=${height}`
</script>

<section class="hero">
	<figure class="hero-bg">
		{#if heroId}
			<picture>
				<source
					type="image/avif"
					srcset={assetUrl(heroId, { format: 'avif', width: 1600, height: 900 })}
				/>
				<source
					type="image/webp"
					srcset={assetUrl(heroId, { format: 'webp', width: 1600, height: 900 })}
				/>
				<img src={fallbackImg} alt="" loading="lazy" decoding="async" />
			</picture>
		{/if}
	</figure>

	<div class="hero-overlay"></div>

	<header class="hero-content">
		<h1 class="hero-title">{project.title}</h1>
		<p class="hero-copy">{shortHeroText}</p>
		<a class="hero-cta" href="#c">➜</a>
	</header>

	<a
		class="hero-card"
		href={callout?.slug ? `/projects/${callout.slug}` : '#'}
		aria-label={`Open project: ${callout?.title || ''}`}
	>
		<figure class="hero-card-figure">
			{#if calloutId}
				<picture>
					<source
						type="image/avif"
						srcset={assetUrl(calloutId, { format: 'avif', width: 570, height: 250 })}
					/>
					<source
						type="image/webp"
						srcset={assetUrl(calloutId, { format: 'webp', width: 570, height: 250 })}
					/>
					<img
						src={fallbackImg}
						width="570"
						height="250"
						alt={`image die te maken heeft met ${callout?.title || ''}`}
						loading="lazy"
						decoding="async"
					/>
				</picture>
			{/if}

			<figcaption class="hero-card-body">
				<h2 class="hero-card-title">{callout.title}</h2>
				<span class="hero-card-accent"></span>
				<p class="hero-card-caption">{shortCalloutText}</p>
			</figcaption>
		</figure>
	</a>

	<span class="hero-timebar"></span>
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		min-height: 72vh;
		overflow: hidden;

		@media (min-width: 761px) {
			min-height: clamp(68vh, 100vh, 100vh);
		}
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		margin: 0;

		picture,
		img {
			width: 100%;
			height: 100%;
			display: block;
		}

		img {
			object-fit: cover;
			object-position: 25% center;
		}
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0) 40%,
			rgba(0, 0, 0, 0.4) 100%
		);
	}

	.hero-content {
		position: absolute;
		bottom: 18px;
		left: 14px;
		z-index: 2;
		max-width: 90%;
		color: #fff;
		text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);

		@media (min-width: 761px) {
			bottom: 28px;
			left: 28px;
			max-width: min(86ch, 96%);
			padding-right: min(25em, 51vw);
		}
	}

	.hero-title {
		margin: 0 0 1.4rem;
		font-size: clamp(2rem, 8vw, 3rem);
		font-weight: 800;
		line-height: 0.98;

		@media (min-width: 761px) {
			font-size: clamp(2.6rem, 6vw, 6rem);
			line-height: 0.94;
		}
	}

	.hero-copy {
		margin: 0.6rem 0 1rem;
		font-size: 1rem;

		@media (min-width: 761px) {
			font-size: clamp(1rem, 1.4vw, 1.15rem);
		}
	}

	.hero-cta {
		width: 44px;
		height: 44px;
		display: grid;
		place-items: center;
		background: #bfe0d9;
		color: #234a7b;
		border-radius: 999px;
		font-weight: 900;
		text-decoration: none;
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
	}

	.hero-card {
		display: none;
		text-decoration: none;
		color: inherit;

		@media (min-width: 761px) {
			display: block;
			position: absolute;
			bottom: 28px;
			right: 28px;
			width: min(420px, 45vw);
			background: #113d72;
			border: 4px solid #113d72;
			border-radius: 16px;
			color: white;
			z-index: 2;
			overflow: hidden;
			box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
		}
	}

	.hero-card-figure {
		img {
			width: 100%;
			height: 240px;
			object-fit: cover;
		}
	}

	.hero-card-body {
		@media (min-width: 761px) {
			padding: 1.2rem 1.2rem 1.4rem;
		}
	}

	.hero-card-title {
		@media (min-width: 761px) {
			margin: 0 0 0.6rem;
			font-weight: 800;
			font-size: clamp(1.1rem, 1.6vw, 1.25rem);
			line-height: 1.1;
		}
	}

	.hero-card-accent {
		@media (min-width: 761px) {
			display: block;
			width: 64px;
			height: 4px;
			background: #4fb1ff;
			border-radius: 3px;
			margin-bottom: 0.75rem;
		}
	}

	.hero-card-caption {
		@media (min-width: 761px) {
			margin: 0;
			font-size: 0.98rem;
			line-height: 1.4;
			opacity: 0.95;
		}
	}

	.hero-timebar {
		position: absolute;
		left: 0;
		bottom: 0;
		height: 4px;
		width: 0;
		background: #4fb1ff;
		z-index: 3;
		animation: heroTimeFill 12s linear infinite;
	}

	@keyframes heroTimeFill {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}
</style>
