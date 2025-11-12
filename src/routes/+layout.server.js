export async function load() {
	const [projectsResponse, sponsorsResponse] = await Promise.all([
	  fetch('https://fdnd-agency.directus.app/items/dfr_projects'),
	  fetch('https://fdnd-agency.directus.app/items/dfr_sponsors')
	]);
  
	const [projectsData, sponsorsData] = await Promise.all([
	  projectsResponse.json(),
	  sponsorsResponse.json()
	]);
  
	return {
	  projects: projectsData.data,
	  sponsors: sponsorsData.data
	};
  }
  