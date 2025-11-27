export async function load({ url, parent }) {
	// get project data from layout.server.js
	const { projects } = await parent();

	// get the selected filter from form
	const selectedCategories = url.searchParams.getAll('projects');

	// console.log(projects);
	console.log(selectedCategories);

	let filteredProjects;

	// // check if there are filters selected
	// if (selectedCategories.length > 0) {
	//     // gp through each JavaScript object
	// 	filteredProjects = projects.filter((project) => {
	//         // for each active filter, and check per project all key value pairs to see if the filter is inside of one of those values
	// 		return selectedCategories.some((filter) => {
	//             // https://www.geeksforgeeks.org/javascript/how-to-iterate-json-object-in-javascript/
	// 			return Object.entries(project).some(([key, value]) => {
	// 				// if value is empty, skip it
	// 				if (!value) return false;

	// 				// If the field is a string
	// 				if (typeof value === 'string') {
	//                     // Check if the string contains the filter
	// 					return value.includes(filter);
	// 				}

	// 				// If the field is an array
	// 				if (Array.isArray(value)) {
	//                     // Check if any item in the array contains the filter
	// 					return value.some((item) => item.includes(filter));
	// 				}

	// 				return false;
	// 			});
	// 		});
	// 	});
	// // If there are no filters return all projects
	// } else {
	// 	filteredProjects = projects;
	// }

	// // check if there are filters selected
	// if (selectedCategories.length > 0) {
	// 	// loop door alle mogelijke velden waarin de filter kan staan

	// 	// gebruik de filter op elk van die JSON objecten
	// 	selectedCategories.forEach((filter) => {
	// 		// loop through the value van de JSON onject om te kijken als de filter voorkomt
	// 		filteredProjects = projects.filter((project) =>
	// 			// project.Participation_level.includes(filter)
	// 			forEachField(project, filter)
	// 			// console.log(project)
	// 		);
	// 		console.log(filteredProjects)
	// 	});
	// 	// if there is no filter, show everything
	// } else {
	// 	filteredProjects = projects;
	// }

	// function forEachField(projectFields, filter) {
	// 	// https://www.geeksforgeeks.org/javascript/how-to-iterate-json-object-in-javascript/
	// 	Object.entries(projectFields).forEach(([key, value]) => {
	// 		if (Array.isArray(value)) {
	// 			value.forEach(item => {
	// 				return item.includes(filter)
	// 			})
	// 		} else if (typeof value === 'string') {
	// 			return value.includes(filter);
	// 		} else {
	// 			return false
	// 		}
	// 	});
	// 		// console.log(projectFields)
	// 		console.log(filter)
	// }

	// check if there are filters selected
	if (selectedCategories.length > 0) {
		// loop door alle mogelijke velden waarin de filter kan staan

		// ga per filter door alle JSON objecten
		selectedCategories.forEach((filter) => {
			// gebruik de functie searchValues om om elke value te controleren als de filter daarin voorkomt
			filteredProjects = searchValues(projects, filter);
		});
		// if there is no filter, show everything
	} else {
		filteredProjects = projects;
	}

	function searchValues(collection, filter) {

		return collection.filter((project) => {
		// https://www.geeksforgeeks.org/javascript/how-to-iterate-json-object-in-javascript/
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
					// Alles wat geen string/array is negeren
					return false;
				}
			});
		});
	}

	// console.log(filteredProjects);

	return { projects: filteredProjects };
}
