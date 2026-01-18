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
		const projects = (await getProjects()) as {
			// Define types for each field to prevent: Element implicitly has an 'any' type
			id: number;
			title: string;
			description: string;
			content: string;
			slug: string;
			sort: number;

			project_lead: string | null;

			execution: string[];
			case_study: string[];
			researchers: null;

			Participation_level: string;
			Process_phase: string;

			results: string;
			status: 'draft' | 'published';

			date: string;
			end_date: string | null;

			website_url: string | null;
			img: string | null;
		}[];

		const filteredProjects = projects.filter((project) =>
			Object.entries(filters).every(([key, values]) => {
				if (!values || values.length === 0) return true;

				const field = project[key as keyof typeof project];
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

		const activeFilters = Object.fromEntries(
			Object.entries(filters).filter(
				([key, values]) => Array.isArray(values) && values.length > 0
			)
		);

		return {
			data: {
				projects: filteredProjects,
				activeFilters
			}
		};
	}
);
