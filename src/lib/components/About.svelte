<section class="primary">
	<h2>About us</h2>
	<p>
		Designing for Recognition is an interdisciplinary research group at the Amsterdam University of
		Applied Sciences. Together with students, designers, technology developers, policymakers,
		(local) governments, academic researchers, and citizens, we explore how design & technology can
		contribute to civic life: the numerous and varied interactions through which people in a society
		come together to strive towards collective well-being
	</p>

	<ul>
		<li tabindex="0">
			<h3>Tessa Steenkamp</h3>
			<img
				src="https://civicinteractiondesign.com/wp-content/uploads/2023/08/Tessa-scaled-e1691482296190.jpg"
				alt=""
				width="100"
				height="100"
			/>
		</li>
		<li tabindex="0">
			<h3>Martijn de Waal</h3>
			<img
				src="https://civicinteractiondesign.com/wp-content/uploads/2018/09/martijn-de-waal-1.jpg"
				alt=""
				width="100"
				height="100"
			/>
		</li>
		<li tabindex="0">
			<h3>Jorgen Karskens</h3>
			<img
				src="https://civicinteractiondesign.com/wp-content/uploads/2022/11/1539348613468.jpeg"
				alt=""
				width="100"
				height="100"
			/>
		</li>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--color);
	}

	p {
		width: clamp(25ch, 90%, 85ch);
		line-height: 1.5rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		padding: 0;
		margin: 0 1em;

		@media (min-width: 600px) {
			flex-direction: row;
		}
	}

	li {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		gap: 0.5em;
		padding: 0.5em;
		border-radius: 25px;
		background-color: var(--color-accent-secondary);
		overflow: hidden;
		width: 100px;
		transition: width 0.5s ease;
		justify-content: start;

		&:hover,
		&:focus {
			width: 250px;

			@media (min-width: 350px) {
				width: 290px;
			}

			h3 {
				opacity: 1;
				transform: translateX(0);
			}
		}
	}

	h3 {
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
	}

	img {
		border-radius: 50%;
		width: 100px;
		height: 100px;
		flex-shrink: 0;
	}
</style>
