"use client";

import React from "react";
import styles from "../styles/Content.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Symbbad</h1>
      <p className={styles.description}>
        모든 것을 즐겁게 배우며 성장하는 <span style={{ color: "#6bdb6f", fontWeight: "900" }}>기술자</span>가 되고 싶습니다.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.listTitle}>Portfolio & Blog:</strong>{" "}
          <a
            href="https://blog.symbbad.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            blog.symbbad.com
          </a>
        </li>
        <li className={styles.listItem}>
          <strong className={styles.listTitleNormal}>Github:</strong>{" "}
          <a
            href="https://github.com/symbbad"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/symbbad
          </a>
        </li>
        <li className={styles.listItem}>
          <strong className={styles.listTitleNormal}>Email:</strong>{" "}
          <a
            href="mailto:symbbad@gmail.com"
            className={styles.link}
          >
            symbbad@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Content;