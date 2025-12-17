import * as v from 'valibot';
import { form } from '$app/server';
import { getProjects } from '$lib/server/projectData';

export const filterProjects = form(
	v.object({
		execution: v.optional(v.array(v.string())),
		Participation_level: v.optional(v.array(v.string())),
		Process_phase: v.optional(v.array(v.string())),
		results: v.optional(v.array(v.string())),
		status: v.optional(v.array(v.string()))
	}),
	async (filters) => {
		const projects = await getProjects();

		const filteredProjects = projects.filter((project) =>
			Object.entries(filters).every(([key, values]) => {
				if (!values || values.length === 0) return true;

				const field = project[key];
				if (!field) return false;

				if (Array.isArray(field)) {
					return values.some((value) =>
						field.some((item) =>
							String(item).toLowerCase().includes(value.toLowerCase())
						)
					);
				}

				return values.some((value) =>
					String(field).toLowerCase().includes(value.toLowerCase())
				);
			})
		);

		return {
			data: {
				projects: filteredProjects
			}
		};
	}
);
