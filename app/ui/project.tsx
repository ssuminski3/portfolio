import Image from "next/image";
import styles from "../style.module.css";
import { ProjectType, Tech } from '../utils/type';
import TechStack from "./techStack";
import Link from "next/link";

export const techStack: Tech[] = [
    { name: 'React', class: 'devicon-react-original colored' },
    { name: 'Next.js', class: 'devicon-nextjs-original' },
    { name: 'React Native', class: 'devicon-react-original colored' },
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
            <h1>{props.title}</h1>
            <div style={{display: "flex", padding: 5}}>
                <Link href={props.github_link} target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8', padding: 5 }}>
                    GitHub Repo
                </Link>
                {props.prod_link && (
                    <Link href={props.prod_link} target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8', padding: 5 }}>
                        Live Demo
                    </Link>
                )}
            </div>

            <TechStack tech={props.techStack} />

            <div className={styles.projectview}>
                {props.image && (
                    <div>
                        <Image
                            alt="Project photo"
                            className={styles.projectimage}
                            src={props.image}
                            width={500}
                            height={500}
                        />
                    </div>
                )}
                <div className={styles.projectDesc}>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
