import * as v from 'valibot';
import { form } from '$app/server';
import { getProjects } from '$lib/server/projectData';

export const filterProjects = form(
	v.object({
		execution: v.optional(v.string()),
		Participation_level: v.optional(v.string()),
		Process_phase: v.optional(v.string()),
		results: v.optional(v.string()),
		status: v.optional(v.string())
	}),
	async (filters) => {
		const projects = await getProjects();

		const filteredProjects = projects.filter((project) =>
			Object.entries(filters).every(([key, value]) => {

				if (!value) return true;

				const field = project[key];
				if (!field) return false;

				if (Array.isArray(field)) {
					return field.some((item) =>
						String(item).toLowerCase().includes(value.toLowerCase())
					);
				}

				return String(field).toLowerCase().includes(value.toLowerCase());
			})
		);
		console.log("new remote", filteredProjects)

		return {
			data: {projects: filteredProjects}
		};
	}
);
