// +page.server.js
export async function load({ url, parent }) {
	// get project data from layout.server.js
	const { projects } = await parent();

	// get the selected filter from form
	const selectedCategories = url.searchParams.getAll('projects');

	// console.log(projects)
	// console.log(selectedCategories);

	// JSON objects to search. in one of these the selected filter can be found.
	const filterCategories = ['execution', 'Participation_level', 'Process_phase', 'results'];
	let filteredProjects;

	// check if there are filters selected
	// if (selectedCategories.length > 0) {
	// 	// loop door alle mogelijke velden waarin de filter kan staan

	// 	// gebruik de filter op elk van die JSON objecten
	// 	selectedCategories.forEach((filter) => {
	// 		// loop through the value van de JSON object om te kijken als de filter voorkomt
	// 		filteredProjects = projects.filter((project) => {
    //             // https://www.geeksforgeeks.org/javascript/how-to-iterate-json-object-in-javascript/
	// 			Object.entries(project).forEach(([key, value]) => {
	// 				// console.log(`${key}: ${value}`);
    //                 project.key.includes(filter);
	// 			});
	// 		});
	// 	});

	// 	// if there is no filter, show everything
	// } else {
	// 	filteredProjects = projects;
	// }


	// check if there are filters selected
	if (selectedCategories.length > 0) {
		// loop door alle mogelijke velden waarin de filter kan staan

		// gebruik de filter op elk van die JSON objecten
		selectedCategories.forEach((filter) => {
			// loop through the value van de JSON object om te kijken als de filter voorkomt
			filteredProjects = projects.filter((project) =>
				project.Participation_level.includes(filter)
			);
		});
		// if there is no filter, show everything
	} else {
		filteredProjects = projects;
	}

	console.log(filteredProjects);

	return { projects: filteredProjects };
}
