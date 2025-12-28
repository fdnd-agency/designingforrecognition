import { getProjects } from '$lib/server/projectData';

export async function load() {
	const [projects, sponsorsResponse] = await Promise.all([
		getProjects(),
		fetch('https://fdnd-agency.directus.app/items/dfr_sponsors/')
	]);

	const sponsorsData = await sponsorsResponse.json();

	return {
		projects,
		sponsors: sponsorsData.data
	};
}
