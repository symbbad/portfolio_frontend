"use client";

import React from "react";
import styles from "../styles/Content.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Symbbad</h1>
      <p className={styles.description}>
        네트워크와 인프라 분야에서 끊임없이 탐구하고 가치를 창출하는,<br></br> <span style={{ fontWeight: "900", color: "#6bdb6f", textShadow: "0 0 10px rgba(76, 175, 80, 0.8), 0 0 20px rgba(76, 175, 80, 0.6)" }}>기술 전문가</span>가 되고자 합니다
      </p>
      <div className={styles.divider} />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.listTitle}>Portfolio:</strong>{" "}
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