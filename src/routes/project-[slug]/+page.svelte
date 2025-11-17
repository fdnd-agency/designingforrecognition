<script>
	import { DetailsMain } from '$lib'
	export let data
	const projectsDetails = data.projectsDetails[0]
</script>

<main>
	<DetailsMain {projectsDetails} />
</main>
