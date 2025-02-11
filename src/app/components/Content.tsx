"use client";

import React from "react";
import styles from "../styles/Content.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ fontWeight: "bold", color: "rgba(76, 175, 79, 0.84)" }}>Sim <span style={{ color: "#aaa", fontStyle: "italic", fontWeight: 600 }}>· Hyunjun</span>
</h1>
      <p className={styles.description}>
        네트워크, 인프라 분야에서 끊임없이 탐구하고 <br></br>가치를 창출하는 <span style={{ fontWeight: "900"}}>기술 전문가</span>를 목표합니다
      </p>
      <div className={styles.divider} />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong className={styles.listTitle}>Portfolio:</strong>{" "}
          <a
            href="https://portfolio.symbbad.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            blog.symbbad.com
          </a>
        </li>
        <li className={styles.listItem}>
          <strong className={styles.listTitle}>Blog:</strong>{" "}
          <a
            href="https://sruzur.tistory.com/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            sruzur.tistory.com
          </a>
        </li>
        <li className={styles.listItem}>
          <strong className={styles.listTitle}>Github:</strong>{" "}
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
          <strong className={styles.listTitle}>Email:</strong>{" "}
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