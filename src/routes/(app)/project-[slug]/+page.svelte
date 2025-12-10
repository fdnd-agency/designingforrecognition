<script>
	import { DetailsMain } from '$lib'
	// export let data
	// const projectsDetails = 
	let { data } = $props()
</script>

<main>
	<DetailsMain projectsDetails={data.projectsDetails[0]} />
</main>
