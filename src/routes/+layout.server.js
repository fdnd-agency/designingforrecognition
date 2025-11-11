export async function load({ url }) {
	const projectsResponse = await fetch(`https://fdnd-agency.directus.app/items/dfr_projects`);
	const projectsData = await projectsResponse.json();

	return { projects: projectsData.data };
}
