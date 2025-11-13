<footer class="footer">
	<section class="footer-container">
		<section class="footer-left">
			<h2 class="project-title">Designing for recognition</h2>

			<address class="contact-block">
				<p class="contact-line">
					<strong>Tessa Steenkamp</strong> | Project Manager<br />
					<a href="mailto:Tessa.email@hva.nl">Tessa.email@hva.nl</a>
				</p>
			</address>

			<nav class="footer-nav">
				<a href="partners">About this project</a>
				<a href="partners">partners</a>
				<a href="signal">Signal</a>
			</nav>
		</section>

		<section class="footer-right">
			<h2 class="community-heading">Join our community of practice</h2>
			<p class="community-text">
				Join us on our Signal group and subscribe to our quarterly newsletter, where we share thoughts, interesting readings, conferences, and other
				media that relate to the project.
			</p>

			<section class="brand-block">
				<p class="brand-left">
					<strong class="brand-line-1">CIVIC INTERACTION DESIGN</strong><br />
					<em class="brand-line-2">RESEARCH GROUP</em>
				</p>
			</section>
		</section>
	</section>
</footer>

<style>
	.footer {
		background-color: var(--color-accent-secondary);
		padding: 2rem 5vw;

		@media (min-width: 768px) {
			padding: 3rem 6vw;
		}
	}

	/* layout */
	.footer-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 1400px;
		margin-inline: auto;

		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			gap: 16rem;
		}

		@media (min-width: 1024px) {
			justify-content: center;
		}
	}

	/* kolommen */
	.footer-left,
	.footer-right {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		@media (min-width: 768px) {
			max-width: 500px;
		}
	}

	/* titels & tekst */
	.project-title, .community-heading  {
		font-size: var(--font-size-title-paragraph);
	}

	.community-text {
		line-height: 1.5;
		max-width: clamp(40ch, 80vw, 50ch);
	}

	/* contact */
	.contact-block {
		display: flex;
		flex-direction: column;
		line-height: 1.5;


		a {
			color: var(--color-dark);
			text-decoration: none;
			transition: border-color 0.2s;
		}
	}

	/* nav */
	.footer-nav {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		@media (min-width: 768px) {
			gap: 2rem;
		}

		@media (min-width: 1024px) {
			flex-direction: row;
			gap: 2.5rem;
			white-space: nowrap;
		}

		a {
			text-decoration: none;
			color: var(--color-dark);
			line-height: 1.4;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	/* brandblok + logo */
	.brand-block {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.brand-left {
		display: flex;
		flex-direction: column;
		font-weight: 600;
	}
</style>
