<script>
	import { researcher1, researcher2, researcher3 } from '$lib'
</script>

<section class="primary">
	<h2>About us</h2>
	<p>
		Designing for Recognition is an interdisciplinary research group at the Amsterdam University of Applied Sciences. Together with students,
		designers, technology developers, policymakers, (local) governments, academic researchers, and citizens, we explore how design & technology can
		contribute to civic life: the numerous and varied interactions through which people in a society come together to strive towards collective
		well-being
	</p>

	<ul>
		<li tabindex="0">
			<p class="researcher-name">Tessa Steenkamp</p>
			<img src={researcher1} alt="" width="100" height="100" />
		</li>
		<li tabindex="0">
			<p class="researcher-name">Martijn de Waal</p>
			<img src={researcher2} alt="" width="100" height="100" />
		</li>
		<li tabindex="0">
			<p class="researcher-name">Jorgen Karskens</p>
			<img src={researcher3} alt="" width="100" height="100" />
		</li>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color);
		padding: var(--spacing-l) 0 var(--spacing-m) 0;

		h2 {
			margin-bottom: var(--spacing-m);
		}
	}

	p {
		width: clamp(25ch, 90%, 85ch);
		line-height: 1.5rem;
		margin-bottom: var(--spacing-m);
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		padding: 0;
		margin: 0 1em 0 1em;

		@media (min-width: 630px) and (prefers-reduced-motion: no-preference) {
			flex-direction: row;
		}

		@media (prefers-reduced-motion: reduce) and (min-width: 1060px) {
			flex-direction: row;
		}
	}

	li {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		gap: 0.5em;
		padding: 0.5em;
		background-color: var(--color-accent-secondary);
		overflow: hidden;
		width: 120px;
		transition: width 0.5s ease;
		justify-content: start;
		cursor: default;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
			width: 250px;

			@media (min-width: 350px) {
				width: 325px;
			}
		}

		&:hover,
		&:focus {
			width: 250px;

			@media (min-width: 350px) {
				width: 325px;
			}

			.researcher-name {
				opacity: 1;
				transform: translateX(0);

				@media (prefers-reduced-motion: reduce) {
					transform: none;
					transition: none;
				}
			}
		}
	}

	.researcher-name {
		opacity: 0;
		transform: translateX(-20px);
		transition:
			opacity 0.4s ease,
			transform 0.4s ease;
		font-size: 24px;
		margin: 0;

		@media (min-width: 350px) {
			white-space: nowrap;
		}

		@media (prefers-reduced-motion: reduce) {
			transform: none;
			transition: none;
			opacity: 1;
		}
	}

	img {
		border-radius: 50%;
		width: 100px;
		height: 100px;
		flex-shrink: 0;
	}
</style>
