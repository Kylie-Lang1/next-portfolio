import { title } from "@/components/primitives";

export default function ProjectPage ({params} : any){
    return (
        <div>
            <h1 className={title()}>{params.name}</h1>
        </div>
    )
    
    }