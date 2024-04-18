import { useEffect } from "react";
import styles from "./App.module.css";
import { useState } from "react";

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((value) => setData(value));
  }, []);

  return (
    <main className={styles.container}>
      {!data ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <>
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
          <div className={styles.summary}>
            <h2 className={styles.title}>Summary</h2>
            <div className={styles.categories}>
              {data.map((item) => (
                <div
                  key={item.category}
                  className={`${styles.category} ${styles[item.category]}`}
                >
                  <div className={styles.name}>
                    <img
                      src={item.icon}
                      alt={`${item.category} category representation`}
                      className={styles.icon}
                    />
                    <p className={styles.text}>{item.category}</p>
                  </div>
                  <p className={styles.score}>
                    <span>{item.score}</span> / 100
                  </p>
                </div>
              ))}
            </div>
            <button className={styles.button}>Continue</button>
          </div>
        </>
      )}
    </main>
  );
};
