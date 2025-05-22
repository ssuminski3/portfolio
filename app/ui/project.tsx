import Image from "next/image"
import styles from "../style.module.css"

type project = {
    title: string,
    description: string,
    image: string,
    github_link: string,
    prod_link?: string
}

export default function Project(props: project) {
  return (
    <div className={styles.projectcontainer}>
      <img alt="Project photo" className={styles.projectimage} src={props.image} width={384} height={216}/>
      <div className={styles.projectdesc}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.github_link}</p>
        {props?.prod_link || <p>{props.prod_link}</p>}
      </div>
    </div>
  )
}
