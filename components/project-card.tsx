'use client'

import Image from "next/image";
import { Link } from "@nextui-org/react";

export default function ProjectCard ({project}: any) {
    return (
        <div>
            <p className="pb-3">
                <Link href={`/projects/${project.id}`} className="text-2xl  hover:text-blue-400">
                        {project.title}
                </Link>
            </p>
            <Link href={`/projects/${project.id}`}>
                <Image src={project.image} alt={`${project.title} image`} className="h-[250px] w-[500px] mx-auto block"/>
            </Link>
        </div>
    )
}