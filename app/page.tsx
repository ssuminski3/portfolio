import Header from "./ui/header";
import styles from './style.module.css'
import Project from "./ui/project";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.aboutme}>
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptates omnis iusto error quod accusamus velit pariatur veniam in ex deserunt laborum ipsam a, dolorum laudantium voluptatem labore, consectetur officia voluptas illo aperiam ab impedit! Dolorem alias excepturi soluta voluptas ea placeat rem accusamus sint pariatur? Velit pariatur corporis voluptatem quo doloremque? Esse inventore totam iusto corrupti illo veniam eveniet ad culpa odit repudiandae quia ex odio, qui enim rem explicabo dolorem aut quae numquam itaque sapiente quasi est, exercitationem voluptas? Assumenda, velit alias perferendis iure qui tempore dolor asperiores sit quidem, quo officia similique voluptates optio, quis sint quaerat!</p>
      </div>
      <div className={styles.aboutme}>
        <h2>Projects</h2>
        <Project title="Proejct1" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt eos illum quia explicabo. Aspernatur possimus debitis expedita minima reprehenderit quis veniam quisquam dicta a aliquid, perspiciatis quaerat autem quidem reiciendis alias provident nihil nisi recusandae? Provident, inventore. Deleniti quas culpa nihil, fugit fuga, a corrupti consectetur dolorum eligendi cupiditate expedita eius. Veritatis tempore similique esse velit eius, atque inventore libero quia dolores quam illo nostrum corrupti, consectetur magnam officia facilis rerum nobis explicabo quibusdam rem deserunt? Non voluptatum at velit natus unde. Est distinctio ratione mollitia quam nam officiis quia soluta neque illo repellendus pariatur iste laborum, error accusamus." image="https://media.istockphoto.com/id/2151690936/pl/wektor/zestaw-ikon-cienkiej-linii-pracy-zespo%C5%82owej-i-ludzi-biznesu-edytowalna-kolekcja-ikon-obrysu.jpg?s=1024x1024&w=is&k=20&c=nWv7AnG9jnqPsKiuOryV7dxYhz4npsbbwhRxi6lwH80=" github_link="hello" prod_link="uyt"/>
      </div>
    </div>
  );
}
