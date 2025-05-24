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
        <div style={{ padding: '1rem' }}>
          <p>
            I’m an aspiring JavaScript/TypeScript developer with 5 years of programming experience, including Python automation, one year in game development, and 2.5 years working with React and React Native to build mobile and web applications.
          </p>
          <p style={{ paddingTop: '1rem' }}>
            I hold INF03 and INF04 certifications and have completed two internships: a total of three months at Polkomtel (across separate terms) and a one-month Erasmus+ internship in Spain. My personal projects — all available below and on my GitHub — are practical, user-focused, and built to solve real-world problems, showcasing my skills
          </p>
        </div>
      </div>
      <div className={styles.aboutme}>
        <h2>Projects</h2>
        <ProjectSection techStack={techStack} techList={techList} />
      </div>
    </div>
  );
}
