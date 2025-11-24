export async function load({ params }) {
	const slug = params.slug;
	const projectDetailsResponse = await fetch(`https://fdnd-agency.directus.app/items/dfr_projects?filter={"slug":{"_eq":"${ slug }"}}`)
	const projectsDetails = await projectDetailsResponse.json()

	return {projectsDetails: projectsDetails.data}
}