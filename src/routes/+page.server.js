export async function load({ url, parent }) {
	// get project data from layout.server.js
	const { projects } = await parent();

	// get the selected filter from form
	const selectedCategories = url.searchParams.getAll('projects');

	let filteredProjects;

	if (selectedCategories.length > 0) {
		// ga per filter door alle JSON objecten. gebruik de functie searchValues om om elke value te controleren als de filter daarin voorkomt
		selectedCategories.forEach((filter) => {
			filteredProjects = searchValues(projects, filter);
		});
		// if there is no filter, show everything
	} else {
		filteredProjects = projects;
	}

	// This function goes through all the values of the JSON we send to th home page (data for the project cards)
	// and searches for the filter the user selected
	function searchValues(collection, filter) {
		return collection.filter((project) => {
			return Object.entries(project).some(([key, value]) => {
				if (value == null) {
					return false;
				} else if (typeof value === 'string') {
					return value.includes(filter);
				} else if (Array.isArray(value)) {
					return value.some((item) =>
						typeof item === 'string' && item.includes(filter)
					);
				} else {
					return false;
				}
			});
		});
	}

	return { projects: filteredProjects };
}
