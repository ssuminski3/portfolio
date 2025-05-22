import Image from "next/image"
import styles from "../style.module.css"
import { ProjectType, Tech } from '../utils/type'
import TechStack from "./techStack"

export const techStack: Tech[] = [
    { name: 'React', class: 'devicon-react-original colored' },
    { name: 'Next.js', class: 'devicon-nextjs-original' }, // black & white
    { name: 'React Native', class: 'devicon-react-original colored' }, // uses React icon
    { name: 'TypeScript', class: 'devicon-typescript-plain colored' },
    { name: 'JavaScript', class: 'devicon-javascript-plain colored' },
    { name: 'Tailwind CSS', class: 'devicon-tailwindcss-plain colored' },
    { name: 'Node.js', class: 'devicon-nodejs-plain colored' },
    { name: 'Firebase', class: 'devicon-firebase-plain colored' },
    { name: 'Git', class: 'devicon-git-plain colored' },
    { name: 'Docker', class: 'devicon-docker-plain colored' },
];


export default function Project(props: ProjectType) {
    return (
        <div className={styles.projectcontainer}>
            <h2>{props.title}</h2>
            <div className={styles.projectview}>
                <p>{props.github_link}</p>
                {props?.prod_link || <p>{props.prod_link}</p>}
            </div>

            <TechStack tech={props.techStack} />

            <div className={styles.projectview}>
                <div >
                    <img alt="Project photo" className={styles.projectimage} src={props.image} width={384} height={216} />
                </div>
                <div >
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
