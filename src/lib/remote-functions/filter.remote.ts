import * as v from 'valibot'
import { form } from '$app/server'

export const filterProjects = form(
	v.object({
		execution: v.optional(v.string()),
		Participation_level: v.optional(v.string()),
		Process_phase: v.optional(v.string()),
		results: v.optional(v.string()),
		status: v.optional(v.string())
	}),
	async (data) => {
		console.log(data)

		return data
	}
)