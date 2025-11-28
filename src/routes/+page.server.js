export async function load({ url, parent }) {
	// get project data from layout.server.js
	const { projects } = await parent();

	// get the form url
	const selectedCategories = url.searchParams;

	// let filteredProjects;
	let filteredProjects;

	let keyValuePairs = [];

	// maakt een array met key en value samen, wordt daarna opgeslagen in keyValuePairs, een array in een array
	selectedCategories.forEach((value, key) => {
		keyValuePairs.push([key, value]);
	});

	console.log(keyValuePairs);

	if (selectedCategories.length === 0) {
		return (filteredProjects = projects);
	}

	// Pas elke filter toe

	filteredProjects = projects.filter((project) =>
		keyValuePairs.every(([key, value]) => {
			if (!project[key]) return false; // check dat het veld bestaat
			return project[key].toLowerCase().includes(value.toLowerCase());
		})
	);

	return { projects: filteredProjects };

	// if (selectedCategories.length > 0) {
	// 	// ga per filter door alle JSON objecten. gebruik de functie searchValues om om elke value te controleren als de filter daarin voorkomt
	// 	selectedCategories.forEach((filter) => {
	// 		filteredProjects = searchThroughValues(projects, filter);
	// 	});
	// 	// if there is no filter, show everything
	// } else {
	// 	filteredProjects = projects;
	// }

	// // This function searches through all values of the JSON objects (used for project cards on the homepage)
	// // and returns only those objects where the user's selected filter matches any value.
	// function searchThroughValues(jsonObjects, filter) {
	// 	return jsonObjects.filter((project) => {
	// 		// Iterate over all key value pairs of a single JSON object
	// 		// Handle all possible values: empty, a string, or an array
	// 		// if true the entire object will be placed in the new array that the filter makes
	// 		return Object.entries(project).some(([key, value]) => {
	// 			if (value == null) {
	// 				return false;
	// 			} else if (typeof value === 'string') {
	// 				return value.includes(filter);
	// 			} else if (Array.isArray(value)) {
	// 				return value.some((item) => typeof item === 'string' && item.includes(filter));
	// 			}
	// 		});
	// 	});
	// }

	// if (selectedCategories.length > 0) {
	// 	// ga per filter door alle JSON objecten. gebruik de functie searchValues om om elke value te controleren als de filter daarin voorkomt
	// 	selectedCategories.forEach((filter) => {
	// 		filteredProjects = searchThroughValues(projects, filter);
	// 	});
	// 	// if there is no filter, show everything
	// } else {
	// 	filteredProjects = projects;
	// }

	// // This function searches through all values of the JSON objects (used for project cards on the homepage)
	// // and returns only those objects where the user's selected filter matches any value.
	// function searchThroughValues(jsonObjects, filter) {
	// 	return jsonObjects.filter((project) => {
	// 		// Iterate over all key value pairs of a single JSON object
	// 		// Handle all possible values: empty, a string, or an array
	// 		// if true the entire object will be placed in the new array that the filter makes
	// 		return Object.entries(project).some(([key, value]) => {
	// 			if (value == null) {
	// 				return false;
	// 			} else if (typeof value === 'string') {
	// 				return value.includes(filter);
	// 			} else if (Array.isArray(value)) {
	// 				return value.some((item) => typeof item === 'string' && item.includes(filter));
	// 			}
	// 		});
	// 	});
	// }
}
