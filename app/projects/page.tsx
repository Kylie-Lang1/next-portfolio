import { title } from "@/components/primitives";
import { projects } from '../../data/projects.const'
import ProjectCard from "@/components/project-card";

export default function Projects() {
	return (
		<>
			<h1 className={title()}>Projects</h1>
			<div className="mt-16 grid grid-cols-2 justify-center">
				{
					projects.map((project) => {
						return <ProjectCard project={project} className='m-auto'/>
					})
				}
			</div>
		</>
	);
}
