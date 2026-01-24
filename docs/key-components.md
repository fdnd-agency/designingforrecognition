# Key Components
## Contents
- [Color System](#color-system)
- [Remote Function Filtering](#remote-function-filtering)



## Color System
### Overview
The project uses a custom CSS-based color system to generate consistent color palettes with lighter and darker variations. This system is designed to reduce code duplication and make color adjustments easier and more maintainable.

### Base colors
Base colors are defined as CSS custom properties in `.body`. These colors are defined using hexadecimal values to ensure broad browser compatibility.

```css
.body {
  --color-primary: #ffffff;
  --color-dark: #000000;
  --color-neutral: #0d3951;
  --color-accent-primary: #8bcbbd;
  --color-accent-secondary: #ebdac4;
}
```

### Color calculation logic
Color variations are generated using relative color calculations. Each color context is activated by applying a class (.neutral, .accent-primary, or .accent-secondary) to an element.

Within these classes, a shared --place-holder variable is used as the base color. From this base, darker and lighter variants are calculated.

By default, the system uses HSL with color-mix() for broad browser compatibility. When supported, it enhances to OKLCH using relative color syntax.

```CSS
.neutral,
.accent-primary,
.accent-secondary {
  --dark-2: color-mix(in hsl, var(--place-holder) 80%, black 20%);
  --dark-1: color-mix(in hsl, var(--place-holder) 90%, black 10%);
  --color: color-mix(in hsl, var(--place-holder) 100%, white 0%);
  --light-1: color-mix(in hsl, var(--place-holder) 100%, white 2%);
  --light-2: color-mix(in hsl, var(--place-holder) 100%, white 7%);

  @supports (color: oklch(50% 0.1 120)) {
    --dark-2: oklch(from var(--place-holder) calc(l - 0.10) calc(c + 0.02) h);
    --dark-1: oklch(from var(--place-holder) calc(l - 0.04) calc(c + 0.01) h);
    --color: oklch(from var(--place-holder) l c h);
    --light-1: oklch(from var(--place-holder) calc(l + 0.02) calc(c + 0.01) h);
    --light-2: oklch(from var(--place-holder) calc(l + 0.04) calc(c + 0.02) h);
  }
}
```

### Color context mapping
Each color class assigns a specific base color to --place-holder. This determines which color palette is active within that element’s scope.

```CSS
.neutral {
  --place-holder: var(--color-neutral);
}

.accent-primary {
  --place-holder: var(--color-accent-primary);
}

.accent-secondary {
  --place-holder: var(--color-accent-secondary);
}
```

### Usage
To use a color palette, apply one of the color classes to a container element. All color variants become available within that scope via the shared custom properties.
```HTML
<section class="neutral">
  <div style="background-color: var(--dark-2)"></div>
  <div style="background-color: var(--color)"></div>
  <div style="background-color: var(--light-2)"></div>
</section>
```
*Note: The CSS is written inline here to demonstrate how it works. In the actual project, this CSS is defined within the style blocks of the Svelte files.*

When a class is applied to an HTML element, all color variations become available within that scope:
```HTML
<section class="primary">
  <div style="background-color: var(--dark-2)"></div>
</section>
```

### Advantages
- Centralized color definitions
- Automatic generation of lighter and darker variants
- Progressive enhancement with OKLCH
- Reduced code duplication
- Consistent color behavior across the application

### Points of attention
- The color system is class-based; a color class must be applied in the HTML to activate a palette.
- All color variants share the same custom property names (--dark-1, --light-1, etc.), scoped by the active class.
- Developers should review the color system carefully before making changes, as adjustments affect all components using that color context.

The reason we chose this structure is that we wanted to use multiple color variants on the page. We wanted to avoid excessive CSS and therefore looked for a way to prevent repetition (DRY). We also aimed to make it easy to use by relying only on custom properties. Unfortunately, this was not fully achievable with CSS alone, which is why adding classes to the HTML was necessary.  
We do have an alternative version using SCSS, where adding classes to the HTML is not required.  
if you'd like to see how, you can read [this article](https://github.com/vsheo/i-love-web/wiki/CSS-color-generator#solution)


## Remote Function Filtering
### Overview
The project uses **SvelteKit remote functions** to implement the project filtering functionality. Remote functions allow client-side components to securely communicate with server-side logic without manually defining API endpoints.

This approach enables progressive enhancement, improves accessibility, and keeps the filtering logic close to the components that use it.

### Implementation details
- The filter functionality is implemented using a **remote function** defined on the server.
- How it works:
  - The **Filter component** directly calls the remote function on the server to build and submit the filter form.
  - The **ProjectCardContainer component** also calls the same remote function to retrieve and render the filtered project data.
- As a result, both components communicate directly with the server and no longer depend on `+page.svelte`.

- **Without remote functions**, filtering would work differently:
  - When a filter is applied, the filter values are sent via the URL to `+page.server.js`.
  - The page-level server logic then applies the filters and returns the filtered data to `+page.svelte`.
  - From there, the filtered data must be passed down through props to the relevant components (such as the ProjectCardContainer).
  - This creates a tighter coupling between the page and its components and makes the components less reusable. 

This makes the components more **self-contained**, **reusable**, and easier to move to other routes if needed.


## Data fetching and server-side logic
The data fetching logic is centralized in src/lib/server/projectData.js. This file is responsible for retrieving project data from the Directus CMS and exposes a reusable function.

By placing the fetch logic at the server utility level, the data can be shared by multiple server-side consumers: including remote functions making it accessible to both the Filter component and the ProjectCardContainer component without duplicating logic or relying on page-level data loading


```js
// src/lib/server/projectData.js
export async function getProjects() {
  const projectsResponse = await fetch(
    'https://fdnd-agency.directus.app/items/dfr_projects'
  );
  const projectsData = await projectsResponse.json();

  return projectsData.data;
}
```

### Data fetching and performance considerations
- Each filter action triggers a new fetch request to retrieve the most up-to-date data from the Directus CMS.
- Caching was tested to reduce repeated fetch requests, but was intentionally not implemented to ensure users always receive the latest data, as project content may change frequently.

### Remote function implementation

The remote filtering logic is implemented in
src/lib/remote-functions/filter.remote.ts.

This remote function:
- Validates incoming filter data using Valibot
- Fetches all projects using getProjects()
- Applies the selected filters server-side
- Returns both the filtered project list and the currently active filters

```ts
// src/lib/remote-functions/filter.remote.ts

// Remote function for filtering projects
export const filterProjects = form(
  // Validate filter input and automatically generate form bindings
  v.object({
    execution: v.optional(v.array(v.string()))
  }),

  async (filters) => {
    // Fetch all projects from the CMS
    // Apply filtering logic to create the filtered list

    // Determine which filters are currently active
    // Used to reflect active filter states in the UI
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([, values]) => values?.length)
    );

    // Return filtered data and active filters
    return {
      data: {
        projects: filteredProjects,
        activeFilters
      }
    };
  }
);
```

### HTML structure and form binding
The filter UI is built using a standard HTML `<form>` that is automatically connected to the remote function via SvelteKit’s form actions.

```html
<form {...filterProjects}>
```

By spreading filterProjects onto the <form> element, the form is:
- Automatically wired to the remote function
- Progressively enhanced (works without JavaScript)
- Able to submit and receive results without a full page reload

### Form fields and inputs
Each filter option is generated using a loop and bound to the remote function using the generated field helpers:
```html
<input {...filterProjects.fields.execution.as('checkbox', value)} />
```
This does the following:
- Generates a checkbox input linked to the execution field defined in the validation schema
- Automatically handles name, value, and form submission
- Ensures the submitted data matches the server-side validation

Because the HTML inputs are generated from the same schema as the server validation, the form structure and server logic always stay in sync.

### Accessibility and navigation
A skip link is included at the top of the filter form:
```HTML
<a href="#project-container">
```
This allows keyboard and screen reader users to skip the filters and jump directly to the project results.

### Active filter state synchronization
After a filter is applied, the server returns an activeFilters object.
On mount, the component uses this data to restore the active state of the checkboxes:
- The active filter values are read from filterProjects.result
- All matching checkboxes are programmatically marked as checked
- This ensures filter state is preserved after each submission

### Reset behavior
A reset function is implemented client-side to clear all selected filters:
```JS
function resetFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(
    (filter) => (filter.checked = false)
  );
}
```
This allows users to reset the filters without reloading the page.

### UI and UX enhancements
- Active filter states are visually indicated, making it clear which filters are currently applied.
- A **reset button** allows users to quickly clear all active filters.
- A **view transition** animation is applied when filtering, causing project cards to smoothly slide up or down when results change.
- The filter component is fully responsive and styled using container queries.
- Accessibility improvements were made to ensure screen reader compatibility.

### Why this structure was chosen
- The fetch logic lives in a shared server utility (projectData.js)
- Both the Filter and ProjectCardContainer components can call the same remote function
- No data needs to be passed through +page.svelte
- Components remain self-contained, reusable, and route-independent
- Server-side filtering keeps sensitive logic off the client

This structure improves maintainability and makes it easier to reuse the filtering system in other routes or projects.


### Points of attention
- Remote functions are a relatively new feature in SvelteKit and rely on framework-level behavior that may not be immediately obvious.
- A solid understanding of SvelteKit’s routing, forms, and server/client interaction is recommended before making changes to this system.

***Since this can be hard to understand, I wrote an article and created a [GitHub repository](https://github.com/vsheo/i-love-web/wiki/Sveltekit-remote-functions) with a minimal working example and commented code***

