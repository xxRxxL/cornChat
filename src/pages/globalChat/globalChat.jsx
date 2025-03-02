import styles from "./globalChat.module.css";
import { Header, SideNav, Convo } from "../../components";
import { Link } from "react-router-dom";
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

      <aside></aside>
    </div>
  );
}
export default cornChat;
