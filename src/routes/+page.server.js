export async function load({ url, parent }) {
	// get project data from layout.server.js
	const { projects } = await parent();

	const selectedCategories = url.searchParams;

	let filteredProjects;

	let keyValuePairs = [];

	selectedCategories.forEach((value, key) => {
		keyValuePairs.push([key, value]);
	});

	console.log(keyValuePairs);

	if (selectedCategories.length === 0) {
		return (filteredProjects = projects);
	}

	// https://blog.logrocket.com/array-filter-method-javascript/#:~:text=John%27%2C%20%27Jonathan%27%2C%20%27Joanna%27%5D-,Filtering%20objects%20by%20specific%20properties,-The%20filter()
	// https://hostman.com/tutorials/how-to-use-javascript-array-map/#filtering-and-mapping

	// filteredProjects = projects.filter((project) =>
	// 	keyValuePairs.every(([key, value]) => {
	// 		// if (!project[key]) return false;
	// 		return project[key].toLowerCase().includes(value.toLowerCase());
	// 	})
	// );

	filteredProjects = projects.filter((project) =>
		keyValuePairs.every(([key, value]) => {
			let p = project[key]
			if (Array.isArray(p)) {
			
				console.log(p)
				console.log('1 ' + value)
				console.log('2 ' + key)
			
				return project[key].some((item) => typeof item === 'string' && item.includes(value));
			} else {
				// return project[key].includes(value.toLowerCase());
				return project[key].toLowerCase().includes(value.toLowerCase());
			}
		})
	);

	console.log(filteredProjects)

	return { projects: filteredProjects };
}
