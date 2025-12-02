// import { query } from '$app/server';

// export const getFilteredProjects = query(async ({ keyValuePairs }, event) => {
//   const { projects } = await event.parent();

//   return projects.filter(project =>
//     keyValuePairs.every(([key, value]) => {
//       const field = project[key];
//       if (!field) return false;

//       if (Array.isArray(field)) {
//         return field.some(item => String(item).toLowerCase().includes(value.toLowerCase()));
//       }

//       return String(field).toLowerCase().includes(value.toLowerCase());
//     })
//   );
// });

import { query } from '$app/server';

export const getFilteredProjects = query(async ({ keyValuePairs }, event) => {
	const { projects } = await event.parent();

	console.log(keyValuePairs);
	console.log(projects);

	// if no filter is selected return all projects
	if (keyValuePairs.length === 0) {
		return { projects };
	} else {
		// https://blog.logrocket.com/array-filter-method-javascript/#:~:text=John%27%2C%20%27Jonathan%27%2C%20%27Joanna%27%5D-,Filtering%20objects%20by%20specific%20properties,-The%20filter()
		// in each JSON object ( => project), use the key to get the correct key value pair
		const filteredProjects = projects.filter((project) =>
			keyValuePairs.every(([key, value]) => {
				// if the value is an array check each string inside the array
				if (Array.isArray(project[key])) {
					return project[key].some((item) =>
						String(item).toLowerCase().includes(value.toLowerCase())
					);
					// if its a string, check the string
				} else {
					return project[key].toLowerCase().includes(value.toLowerCase());
				}
			})
		);
		return { projects: filteredProjects };
	}
});
