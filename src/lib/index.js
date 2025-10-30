// place files you want to import through the `$lib` alias in this folder.
// Components
// Component responsible for rendering project subjects on the home page
export { default as ProjectCard } from './components/ProjectCard.svelte'
// This component is the container for all project cards on the home page
export { default as ContainerProjectCard } from './components/ContainerProjectCard.svelte'
// component for the main content on the details page
export { default as About } from './components/About.svelte'
// carrousel for displaying the sponsors on the homepage
export { default as SponsorCarousel } from './components/SponsorCarousel.svelte'
// component for loading in the details page content
export { default as DetailsMain } from './components/DetailsMain.svelte'

export { default as FooterInfo } from './components/FooterInfo.svelte'



// Images & Icons
export { default as fallBackimg } from './assets/fallBackimg.png'
export { default as backButton } from './assets/backButton.svg'
