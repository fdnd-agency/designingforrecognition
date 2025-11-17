export async function load ({url}) {
    const SponsorDataResponse = await fetch(`https://fdnd-agency.directus.app/items/dfr_sponsors/`)
    const Sponsor = await SponsorDataResponse.json()

    return {Sponsor: Sponsor.data}
}