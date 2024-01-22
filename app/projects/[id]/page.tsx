'use client'

import { title } from "@/components/primitives";
import { IProjects, projects } from '../../../data/projects.const'
import { useEffect, useState } from "react";
import {Link} from "@nextui-org/react";
import Image from "next/image";

export default function ProjectPage ({params} : any){
    const [shownProject, setShownProject] = useState<IProjects>()
    const [id, setId ] = useState<number>(parseInt(params.id))

    useEffect(() => {
        const foundProject = projects.find(project => project.id === id);
        setShownProject(foundProject)
        console.log(foundProject)
    }, [params, setShownProject])
    
    return (
            <div>
                <h1 className={title()}>{shownProject?.title}</h1>
                <div className="flex flex-row">
                    <Image src={shownProject?.image} alt={`${shownProject?.title} image`} className="h-[330px] w-[650px] m-10 inline"/>
                    <div className="m-8">
                        <p className="text-left mb-8 mr-10">{shownProject?.description}</p>
                        <p className="text-left font-bold mb-5">With this app, users are able to:</p>
                        <ul className="inline list-disc text-left">
                            {
                                shownProject?.uses.map(use => {
                                    return <li className="list-disc ml-5" key={shownProject?.id}>{use}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="text-left ml-10"><span className="font-bold text-yellow-300 mr-3">Technologies: </span>{shownProject?.technologies.join(', ')}</div>
                <div className="text-left ml-10 mt-3">
                    <div className="inline text-purple-400 font-bold">Github: </div>
                    {
                        shownProject?.github?.frontend ?
                            <Link href={shownProject?.github?.frontend} className="border border-indigo-700 px-3 rounded-xl mx-2 bg-indigo-800 hover:bg-indigo-700 text-white">Frontend</Link>
                                : null
                    }
                    {
                        shownProject?.github?.backend ?
                            <Link href={shownProject?.github?.backend} className="border border-indigo-700 px-3 rounded-xl mx-2 bg-indigo-800 hover:bg-indigo-700 text-white">Backend</Link>
                                : null
                    }
                </div>
            </div>
        )
    }