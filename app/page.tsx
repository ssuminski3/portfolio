// app/page.tsx (or Home.tsx)
import Header from "./ui/header";
import styles from './style.module.css'
import ProjectSection from './ui/ProjectSection'; // new client component
import { getProjectsWithTech, getAllTech } from "./utils/data";

export default async function Home() {
  const techStack = await getProjectsWithTech();
  const techList = await getAllTech();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.aboutme}>
        <h2>About me</h2>
        <p>[Your about me text]</p>
      </div>
      <div className={styles.aboutme}>
        <h2>Projects</h2>
        <ProjectSection techStack={techStack} techList={techList} />
      </div>
    </div>
  );
}
