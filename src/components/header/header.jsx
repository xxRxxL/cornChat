import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <img
        src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
        alt=""
      />
      <h1>Corn Chat</h1>
    </header>
  );
}

export default Header;
