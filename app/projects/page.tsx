import { title } from "@/components/primitives";
import { projects } from '../../data/projects.const'
import ProjectCard from "@/components/project";

export default function Projects() {
	return (
		<>
			<h1 className={title()}>Projects</h1>
			{
				projects.map((project) => {
					return <ProjectCard project={project} />
				})
			}
		</>
	);
}
