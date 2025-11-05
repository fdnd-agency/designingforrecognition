// export async function load ({url}) {
//     const SponsorDataResponse = await fetch(`https://fdnd-agency.directus.app/items/dfr_sponsors/`)
//     const Sponsor = await SponsorDataResponse.json()

//     return {Sponsor: Sponsor.data}
// }


// export async function load({ params }) {
//     const slug = 'open-statistiek-delen';
//     const projectDetailsResponse = await fetch(`https://fdnd-agency.directus.app/items/dfr_projects?filter={"slug":{"_eq":"${ slug }"}}`)
//     const projectsDetails = await projectDetailsResponse.json()

//     return {projectsDetails: projectsDetails.data}
// }
