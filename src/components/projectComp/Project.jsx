import { useState } from "react"
import styles from "./project.module.css"
import ProjectSpec  from "./ProjectSpec"

export default function Project({ project }){

    const [showDescription, setShowDescription] = useState(false)

    return(
        <>
            <div className={styles.projectImgContainer}>
                <img
                    onClick={() => setShowDescription(!showDescription)}
                    className={`${styles.projectImg} clickable`}
                    src={project.img}
                    alt={project.title}
                />
            </div>
            {
            showDescription &&
                <ProjectSpec project={project}/>
            }
        </>
    )
}