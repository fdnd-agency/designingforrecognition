<script>
	import { DetailsMain } from '$lib'
	let { data } = $props()
</script>

<main>
	<DetailsMain projectsDetails={data.projectsDetails[0]} />
</main>
