import styles from "./convo.module.css";

function convo() {
  return (
    <main className={styles.convoLayout}>
      <div className={styles.chatContainer}>
        <div className={styles.userContainer}>
          <img
            src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          accusantium sit doloribus veniam aliquid nemo ducimus corporis
          asperiores at saepe, sunt fuga esse. Enim accusamus tempora officia
          tenetur atque at.
        </p>
      </div>

      <div className={styles.userChat}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          accusantium sit doloribus veniam aliquid nemo ducimus corporis
          asperiores at saepe, sunt fuga esse. Enim accusamus tempora officia
          tenetur atque at.
        </p>
      </div>

      <div className={styles.userInput}>
        <textarea type="text" placeholder="Aa" />
        <button>
          <img
            src="https://img.freepik.com/premium-vector/paper-plane-icon_609277-2356.jpg?ga=GA1.1.1391464815.1739253387&semt=ais_hybrid"
            alt=""
          />
        </button>
      </div>
    </main>
  );
}
export default convo;
