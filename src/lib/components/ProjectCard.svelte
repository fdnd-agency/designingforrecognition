<script>
	import projectImage from '$lib/assets/project-cards-test-image.jpeg';
</script>

<article class="neutral">
	<a href="#"><h3>Beeld herkenning</h3></a>
	<img src={projectImage} alt="afbeelding voor beeld herkenning" width="250" height="165">
	<p>2020/2025</p>
	<p>Since the autumn of 2023, we followed a citizens panel getting engaged with the municipality’s development of a new smart city technology: the scan bike. In a series of sessions, we discussed ethics around implementing such technology and brainstormed on topics like privacy, blurring algorithms and other forms of data minimalization. </p>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, min-content);
		position: relative;
		background-color: var(--light-2);
		color: var(--color-primary);
		border-radius: 15px;
		margin: 1em 0.5em;
		padding: 0.5em;
		max-width: 400px;
		cursor: pointer;
		box-shadow: 1px 1px 10px 0 var(--dark-2);

		&:hover {
			background-color: var(--dark-2);
			outline: 2px solid var(--light-2);
			box-shadow: 1px 1px 5px 10px var(--dark-1);

			img {
				outline: 3px solid var(--light-2);
			}
		}

		@media (min-width: 1130px) {
			grid-template-columns: 13em 1fr;
			grid-template-rows: min-content min-content 1fr;
			min-width: 650px;
			max-width: 860px;
		}
	}

	a {
		color: var(--color-primary);
		text-decoration: none;
		margin-left: 0.3em;

		&:hover {
			color: var(--color-accent-secondary);
		}

		&:focus {
			outline: 3px solid var(--color-accent-secondary);
			border-radius: 5px;
		}

		&::after {
			content: "";
			position: absolute;
			inset: 0;
		}
	}

	h3 {
		grid-row: 3;
		line-height: 2.8rem;
		margin: 0 0 0.3em 0;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 1;
			margin: 0 0 0.3em 0.3em;
		}
	}

	img {
		grid-row: 1;
		border-radius: 5px;
		width: 100%;
		max-width: 380px;
		height: auto;
		justify-self: center;

		@media (min-width: 1130px) {
			grid-column: 1;
			grid-row: 1 / -1;
			height: 100%;
		}
	}

	p:nth-of-type(1) {
		grid-row: 2;
		margin: 0.3em 0 0.3em 0;
		font-style: italic;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 2;
			margin: 0.3em 0 0.3em 0.7em;
		}
	}

	p:nth-of-type(2) {
		grid-row: 4;
		width: clamp(25ch, 100%, 100ch);
		box-sizing: border-box;
		margin: 0;
		padding: 0 0.2em;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 3;
			margin: 0 0 0 0.5em;
		}
	}
</style>
