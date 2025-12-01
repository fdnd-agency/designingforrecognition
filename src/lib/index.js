// place files you want to import through the `$lib` alias in this folder.
// Components
// Logo of the website
export { default as Logo } from './atoms/Logo.svelte';
// Header component for the Website
export { default as Header } from './organisms/Header.svelte';
// These filters sort the Project cards
export { default as Filters } from './organisms/Filters.svelte';
// Component responsible for rendering project subjects on the home page
export { default as ProjectCard } from './organisms/ProjectCard.svelte';
// This component is the container for all project cards on the home page
export { default as ProjectCardContainer } from './organisms/ProjectCardContainer.svelte';
// component for the main content on the details page
export { default as About } from './organisms/About.svelte';
// carrousel for displaying the sponsors on the homepage
export { default as SponsorCarousel } from './organisms/SponsorCarousel.svelte';
// component for loading in the details page content
export { default as DetailsMain } from './organisms/DetailsMain.svelte';

export { default as FooterInfo } from './organisms/FooterInfo.svelte';

// Images & Icons
export { default as favicon } from './assets/favicon.svg';
export { default as fallBackimg } from './assets/fallBackimg.png';
export { default as backButton } from './assets/backButton.svg';
