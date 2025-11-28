export async function load({ url, parent }) {
	// get project data from layout.server.js
	const { projects } = await parent();

	const selectedCategories = url.searchParams;

	let filteredProjects;

	let keyValuePairs = [];

	// store key value pairs together in an array. Which is stored in another array(=> keyValuePairs)
	selectedCategories.forEach((value, key) => {
		keyValuePairs.push([key, value]);
	});

	// if no filter is serlected return all projects
	if (selectedCategories.length === 0) {
		return (filteredProjects = projects);
	} else {
		// https://blog.logrocket.com/array-filter-method-javascript/#:~:text=John%27%2C%20%27Jonathan%27%2C%20%27Joanna%27%5D-,Filtering%20objects%20by%20specific%20properties,-The%20filter()
		// in each JSON object ( => project), use the key to get the correct key value pair
		filteredProjects = projects.filter((project) =>
			keyValuePairs.every(([key, value]) => {
				// if the value is an array check each string inside the array
				if (Array.isArray(project[key])) {
					return project[key].some(
						(item) => typeof item === 'string' && item.includes(value)
					);
					// if its a string, check the string
				} else {
					return project[key].toLowerCase().includes(value.toLowerCase());
				}
			})
		);
	}

	return { projects: filteredProjects };
}
