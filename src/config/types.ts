export interface Project {
	name: string;
	description: string;
	topics: string[];
	html_url: string;
	[key: string]: any;
}

export interface ProjectProps {
	projects: Project[];
}
