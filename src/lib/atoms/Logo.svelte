<a href="/" aria-label="Designing for recognition">
	<span class="logo-text">
		<span>Designing</span>
		<span>for</span>
		<span>Recognition</span>
	</span>
</a>

<style>
	a {
		text-decoration: none;
	}

	.logo-text {
		font-weight: 700;
		text-transform: uppercase;
		background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(13, 56, 79, 1) 44%, rgba(139, 203, 189, 1) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;

		font-size: clamp(0.95rem, calc(5vw + 1rem), 1.7rem);
		line-height: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		align-self: center;
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.25em;
		font-weight: 700;
		text-transform: uppercase;
		background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(13, 56, 79, 1) 44%, rgba(139, 203, 189, 1) 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;

		font-size: clamp(1rem, calc(4vw + 1rem), 2.5rem);
		line-height: 1.1;
	}

	@media (min-width: 680px) {
		.logo-text {
			flex-direction: row;
		}
	}
</style>
