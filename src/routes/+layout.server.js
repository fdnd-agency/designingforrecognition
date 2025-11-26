export async function load() {
	const projectsResponse = await fetch('https://fdnd-agency.directus.app/items/dfr_projects');

	const projectsData = await projectsResponse.json();

	return {
		projects: projectsData.data
	};
}
