import styles from "./cornChat.module.css";
import { Header, SideNav, Aside, Convo } from "../../components";

function cornChat() {
  return (
    <div className={styles.layout}>
      <header>
        <Header />
      </header>
      <nav>
        <SideNav />
      </nav>
      <main className={styles.main}>
        <Convo />
      </main>
      <aside>
        <Aside />
      </aside>
    </div>
  );
}
export default cornChat;
