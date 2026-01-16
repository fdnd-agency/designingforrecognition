## CMS configuration and front-end integration

### CMS overview
The project uses **Directus** as a headless CMS to manage all research-related content displayed on the website. Directus functions purely as a content source for the front-end.

### Content structure
The following collections are configured in Directus:

- **dfr_projects**  
  Contains all project-related data that is displayed on the homepage and detail pages.

- **dfr_researchers**  
  This collection exists in the CMS but is currently empty. The client decided not to display researcher data on the website.

- **dfr_sponsors**  
  Contains sponsor information, including the sponsor name and logo, which are displayed in the footer.

### Data access
All content is retrieved via the Directus REST API using public read access. No authentication is required for fetching CMS data.

### Front-end integration
The fetch logic for CMS data is handled server-side and coordinated through the `+layout.server.js`.

#### Project data
The fetch logic for project data is defined in a shared server utility:

- `src/lib/server/projectData.js`

This file contains the `getProjects()` function, which is responsible for fetching project data from Directus.

The function is **called in the server-side layout loader** (`+layout.server.js`), where both projects and sponsors are fetched:

```js
import { getProjects } from '$lib/server/projectData';

export async function load() {
  const [projects, sponsorsResponse] = await Promise.all([
    // Here
    getProjects(),
    fetch('https://fdnd-agency.directus.app/items/dfr_sponsors/')
  ]);

  const sponsorsData = await sponsorsResponse.json();

  return {
    projects,
    sponsors: sponsorsData.data
  };
}
```

By fetching this data in the layout loader, it becomes available to all routes and components rendered within the layout.

The fetched project data is subsequently used by:
- The remote filtering function
- The ProjectCardContainer component
- The Filter component

### Sponsor data
Sponsor data is fetched directly in the `+layout.server.js` and is only used in the footer component.

Fetching sponsor data in `+layout.server.js` is intentional, as the layout wraps all pages and ensures the data is fetched once per page load. This prevents unnecessary data fetching in individual components and avoids exposing the sponsor data globally where it is not needed.
