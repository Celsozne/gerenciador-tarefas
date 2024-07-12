import Link from "next/link";
import Header from "../components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Index.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  const titulo = "TaskNext";
  return (
    <>
      <Header></Header>
      <div className={styles.body}>
        <section className={styles.hero}>
          <h2>Bem-vindo ao TaskNext</h2>
          <p>Gerencie suas tarefas de forma fácil e eficiente</p>
          <button>Começar agora</button>
        </section>
        <section className={styles.features}>
          <h2>Recursos</h2>
          <ul>
            <li>
              <i className="fas fa-list-ul"></i>
              <p>Crie e gerencie suas tarefas</p>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <p>Defina prazos e prioridades</p>
            </li>
            <li>
              <i className="fas fa-chart-bar"></i>
              <p>Visualize seu progresso</p>
            </li>
          </ul>
        </section>
        <section className={styles.callToAction}>
          <h2>Inscreva-se agora</h2>
          <p>E comece a gerenciar suas tarefas de forma eficiente</p>
          <button>Inscrever-se</button>
        </section>
      </div>

      <footer className="footer py-3 mt-5 bg-body-tertiary small text-center">
        <span className="text-body-secondary">
          {titulo} por{" "}
          <Link href="https://github.com/doxz1n">
            Henrique Sanchez (doxz1n)
          </Link>
        </span>
        {/* <!-- Scripts --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
      </footer>
    </>
  );
}
export default Home;
