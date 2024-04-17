import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.container}>
      <div className={styles.result}>
        <div className={styles.content}>
          <h1 className={styles.title}>Your Result</h1>
          <div className={styles.score}>
            <p className={styles.current}>76</p>
            <p className={styles.total}>of 100</p>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Great</h2>
            <p className={styles.description}>
              Your performance exceed 65% of the people conducting the test
              here!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.summary}></div>
    </main>
  );
};
