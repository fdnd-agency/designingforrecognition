# HANDOVER

## Describe the current status of the project
- The project currently consists of a homepage and a detail page
- The homepage includes a header, a filter functionality, project cards, an “About Us” section, and a footer.
- The detail page uses the same header and footer and displays text and information about a selected project.
- For the CMS, Directus has been set up and contains all project-related data. This data is used for both the project cards on the homepage and the content on the detail pages.
- The research papers are still a work in progress. We have not yet received the final content from the client.
- The text shown on the project cards on the homepage is provided by the client. However, the data for the detail pages is not yet available.
- To enable development and testing of the detail pages, dummy content has been generated.
- When data is unavailable, empty states are implemented to prevent empty or broken pages and to clearly indicate that content is still being worked on.

## List the main working features
- Homepage with a structured overview of research projects
- Project cards displaying image, title and short description
- Category-based filter functionality on the homepage
- Detail page for each project with extended information
- Shared header and footer across all pages
- Responsive layout for desktop and mobile devices
- Data integration with Directus CMS
- Graceful empty states when content is unavailable

## Document key challenges or points of attention
- **Filter functionality**  
  The filter functionality is implemented using SvelteKit remote functions. At the time of development, this feature was only a few months old and had limited documentation/blogs available for our specific use case. As a result, the final implementation was achieved through a combination of experimentation, trial and error, and iterative testing until a stable solution was found.

- **Design constraints and alignment with the existing website**  
  During the project briefing, the client indicated that the existing brand style should be maintained, while the rest of the website could be fully redesigned. After the first design iterations, this requirement changed: the overall structure and order of the existing website needed to be preserved, and the new website should feel like an extension of the current live site rather than a complete redesign.  

  This resulted in multiple redesign iterations throughout the project. It was a significant challenge to balance maintaining the existing brand identity, aligning with the current website structure, and still improving the user experience. Through multiple sprints, feedback sessions, and repeated redesigns, we gradually refined the design and developed a clearer direction that met these constraints.

## Recommend first steps for the next team
- **Clarify requirements with the client early**  
  Check with the client as early as possible what they expect and continue to ask follow-up questions, especially regarding design decisions. Clear alignment at the start helps prevent major redesigns later in the project.

- **Review and further develop the detail pages**  
  During our work, the main focus was largely on the homepage. It is recommended to review the detail pages together with the client to determine how they should look and how they can be improved.

- **Client-provided content**  
Check whether the client has content available for the detail pages. At the time we were working on this assignment, the client was still in the process of writing this content.

- **Study the CSS color system carefully**  
  Review the CSS in the `styleguide.css` file. A custom color system is used that reduces the amount of code, but it works differently from standard CSS custom properties. It requires specific classes to be applied in the HTML in order to use the defined color variations, so it is important to understand this system before making changes.

- **Refactor large Atomic Design components**  
  The components are structured using the Atomic Design methodology (atoms, molecules, and organisms). This structure was applied after all components had already been created, which means some organism components are currently quite large. It is recommended to refactor these organisms by splitting them into smaller atoms and molecules to improve maintainability and reusability.

- **Build a strong foundation in SvelteKit**  
  From the beginning, invest time in learning SvelteKit. The project uses remote functions, which are a more advanced feature and may not be immediately easy to understand. A solid understanding of SvelteKit is essential for maintaining and improving these features.

