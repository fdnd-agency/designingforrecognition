<section>
	<h1 id="top">Creative Coding - CSS</h1>

	<article class="uitleg">
		<h2>Verplaats de button</h2>
		sleep de button rond de pagina

		<form>
			<fieldset>
				<label>
					<input type="radio" name="choice" value="left-top" />
					Top left
				</label>

				<label>
					<input type="radio" name="choice" value="left-bottom" checked />
					Bottom left
				</label>

				<label>
					<input type="radio" name="choice" value="right-top" />
					Top right
				</label>

				<label>
					<input type="radio" name="choice" value="right-bottom" />
					Bottom right
				</label>
			</fieldset>
		</form>
	</article>

	<a class="skip-link" href="#hier">Skip to content</a>

	<div class="svg-placeholder"></div>

	<ul class="comic-book">
		<img src="/assets/pop-art/bike-pop.jpg" alt="" />
		<img src="/assets/pop-art/boom-pop.webp" alt="" />
		<img src="/assets/pop-art/cat-pop.jpg" alt="" />
		<img src="/assets/pop-art/eyes-pop.jpg" alt="" />
		<img src="/assets/pop-art/finger-pop.jpg" alt="" />
		<img src="/assets/pop-art/girl-pop.jpg" alt="" />
		<img src="/assets/pop-art/haha-pop.jpg" alt="" />
		<img src="/assets/pop-art/hair-pop.jpg" alt="" />
		<img src="/assets/pop-art/marilyn-pop.jpg" alt="" />
		<img src="/assets/pop-art/surprise-pop.jpg" alt="" />
		<img src="/assets/pop-art/what-is-pop-art.webp" alt="" />
		<img src="/assets/pop-art/woman-pop.jpg" alt="" />
		<img src="/assets/pop-art/wow-pop.jpg" alt="" />
		<img src="/assets/pop-art/glases-pop.webp" alt="" />
		<img src="/assets/pop-art/hero-pop.jpg" alt="" />
		<img src="/assets/pop-art/lipstick-pop.jpg" alt="" />
		<img src="/assets/pop-art/loli-pop.webp" alt="" />
		<img src="/assets/pop-art/new1-pop.jpg" alt="" />
		<img src="/assets/pop-art/new2-pop.jpg" alt="" />
		<img src="/assets/pop-art/new3-pop.jpg" alt="" />
		<img src="/assets/pop-art/new4-pop.webp" alt="" />
		<img src="/assets/pop-art/new5-pop.jpg" alt="" />
		<img src="/assets/pop-art/new6-pop.jpg" alt="" />
		<img src="/assets/pop-art/new7-pop.jpg" alt="" />
		<img src="/assets/pop-art/new8-pop.avif" alt="" />
		<img src="/assets/pop-art/new9-pop.jpg" alt="" />
	</ul>

	<section class="main-content">
		<h2 id="hier">Content</h2>

		<a class="to-top" href="#top">
			<svg
				fill="#000000"
				version="1.1"
				id="icon"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 32 32"
				xml:space="preserve"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g
					id="SVGRepo_iconCarrier"
				>
					<style type="text/css">
						.st0 {
							fill: none;
						}
					</style><polygon points="16,14 6,24 7.4,25.4 16,16.8 24.6,25.4 26,24 "></polygon>
					<rect x="4" y="8" width="24" height="2"></rect> <rect id="_Transparent_Rectangle_" class="st0" width="32" height="32"></rect>
				</g></svg
			>
			<span>back to top</span>
		</a>
	</section>
</section>

<style>
	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 20px;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: sans-serif;
	}

	.uitleg {
		border: 2px solid hotpink;
		padding: 2rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.5rem;

		fieldset {
			display: flex;
			flex-direction: column;
		}
	}

	.skip-link {
		text-decoration: none;
		/* background-color: gray; */
		box-shadow: 2px 2px 0 0 grey;
		outline: 1px solid gray;
		border-radius: 20px;
		margin: 10px;
		text-wrap: nowrap;
		text-align: center;
		width: 220px;
		font-size: 2rem;
		padding: 1rem;
		position: absolute;
		transition:
			top 1s ease,
			left 1s ease;
		anchor-name: --skip-link;
	}

	.svg-placeholder {
		position: absolute;
		background-image: url('/assets/right-bottom.svg');
		height: 200px;
		width: 200px;

		position-anchor: --skip-link;
		position-area: right bottom;
		position-try-fallbacks: --right-bottom, --left-bottom, --right-top, --left-top;
	}

	@position-try --right-bottom {
		inset: unset;
		position-area: right bottom;
		background-image: url('/assets/right-bottom.svg');
	}

	@position-try --right-top {
		inset: unset;
		position-area: right top;
	}

	@position-try --left-bottom {
		inset: unset;
		position-area: left bottom;
	}

	@position-try --left-top {
		inset: unset;
		position-area: left top;
	}

	section:has(input[value='left-top']:checked) {
		& > .skip-link {
			top: 3em;
			left: 0;
		}

		& > .svg-placeholder {
			background-image: url('/assets/right-bottom.svg');
		}
	}

	section:has(input[value='left-bottom']:checked) {
		& > .skip-link {
			top: calc(100% - 100px);
			left: 0;
		}

		& > .svg-placeholder {
			background-image: url('/assets/right-top.svg');
		}
	}

	section:has(input[value='right-top']:checked) {
		& > .skip-link {
			top: 3em;
			left: calc(100% - 280px);
		}

		& > .svg-placeholder {
			background-image: url('/assets/left-bottom.svg');
		}
	}

	section:has(input[value='right-bottom']:checked) {
		& > .skip-link {
			top: calc(100% - 100px);
			left: calc(100% - 280px);
		}

		& > .svg-placeholder {
			background-image: url('/assets/left-top.svg');
		}
	}

	.comic-book {
		column-count: 3;
		column-gap: 20px;
		width: 90%;
		height: 100%;
		margin: 100vh 3em 0 3em;

		img {
			width: 100%;
			display: block;
			margin-bottom: 10px;
			object-fit: cover;
			border-radius: 4px;
			outline: 5px solid;
			margin-bottom: 20px;
		}
	}

	.main-content {
		margin-top: 70vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;

		#hier {
			margin: 0 auto;
			opacity: 0;
			text-transform: uppercase;
			font-weight: 900;
			font-size: 3rem;
		}

		#hier:target {
			opacity: 1;
			transform: translateY(0);
		}

		.to-top {
			margin-right: 2em;
			text-decoration: none;
			color: black;
			font-size: 1.5rem;
		}
	}
</style>
