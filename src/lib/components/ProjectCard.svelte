<script>
	import projectImage from '$lib/assets/project-cards-test-image.jpeg';
</script>

<article class="neutral color-mix">
	<h3>Beeld herkenning</h3>
	<img src={projectImage} alt="afbeelding voor beeld herkenning" width="100%" height="auto" />
	<p>2020/2025</p>
	<p>
		Since the autumn of 2023, we followed a citizens panel getting engaged with the municipality’s
		development of a new smart city technology: the scan bike. In a series of sessions, we discussed
		ethics around implementing such technology and brainstormed on topics like privacy, blurring
		algorithms and other forms of data minimalization.
	</p>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, min-content);
		background-color: var(--light-2);
		border-radius: 15px;
		margin: 1em 0.5em;
		padding: 0.5em;
		max-width: 400px;

		@media (min-width: 1130px) {
			grid-template-columns: 13em 1fr;
			grid-template-rows: repeat(3, min-content);
			max-width: none;
			width: 850px;
		}
	}

	h3 {
		grid-row: 3;
		line-height: 2rem;
		margin: 0 0 0.3em 5px;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 1;
            margin: 0 0 0.3em 0.4em;
		}
	}

	img {
		grid-row: 1;
		border-radius: 5px;
        max-width: 380px;

		@media (min-width: 1130px) {
			grid-column: 1;
			grid-row: 1 / -1;
            height: 100%;
		}
	}

	p:nth-of-type(1) {
		grid-row: 2;
		margin: 0.3em 0 0.3em 5px;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 2;
            margin: 0.3em 0 0.3em 0.8em;
		}
	}

	p:nth-of-type(2) {
		grid-row: 4;
		width: clamp(30ch, 100%, 100ch);
		margin: 0 0 0 5px;
        padding: 0 0.5em;

		@media (min-width: 1130px) {
			grid-column: 2;
			grid-row: 3;
		}
	}
</style>
