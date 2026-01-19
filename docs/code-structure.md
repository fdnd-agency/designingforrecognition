## Code Structure
The codebase is structured around reusable components. Each component contains all the logic, markup, and styling required to function independently.

### Components

All components are located in `src/lib` and are organized using the Atomic Design methodology:

- **/atoms**  
  The smallest building blocks of the interface. These components have a single responsibility and do not depend on other components.

- **/molecules**  
  Molecules are slightly larger components composed of multiple atoms. They combine atoms into functional UI elements.

- **/organisms**  
  Organisms are the largest components and consist of multiple molecules and atoms.

### Svelte component structure

Within each `.svelte` file, components follow a consistent structure:
1. A `<script>` block containing all required JavaScript logic and imports
2. The HTML markup for the component
3. A `<style>` block containing component specific CSS

### Layout and routing

The main layout is defined in `src/routes/+layout.svelte`. This file loads the shared **header** and **footer** components and contains only the CSS necessary for the layout itself.

Between the header and footer, a `+page.svelte` file is rendered. This can be either the homepage or a project detail page, depending on the active route.

Each `+page.svelte` file imports and renders the components required for that specific page.

### Component exports

All components are exported via an `index.js` file in `src/lib`. This allows for cleaner and more maintainable imports throughout the project.

Example,  
This: `import { ProjectCard } from '$lib';`  
Instead of: `import ProjectCard from '$lib/molecules/ProjectCard.svelte';`
