"use client";

import React from "react";
import styles from "../styles/Content.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Symbbad</h1>
      <div className={styles.divider} />
      <p className={styles.description}>
        네트워크와 인프라의 모든 것을 즐겁게 배우며 <br></br>성장하는 <span style={{ fontWeight: "900" }}>기술자</span>가 되길 원합니다
      </p>
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