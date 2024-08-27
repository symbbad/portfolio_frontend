"use client";

import { useEffect, useState } from "react";
import styles from "../styles/TextAnimation.module.css";

const words = ["Backend", "Network", "Devops", "Infra"];

const TextAnimation: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // 현재 단어의 인덱스
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 관리

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // 애니메이션 시작
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // 다음 단어로 변경
        setIsAnimating(false); // 애니메이션 종료
      }, 1000); // 슬라이드 아웃 지속 시간
    }, 2500); // 단어 전환 주기

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`${styles.word} ${
            index === currentWordIndex
              ? isAnimating
                ? styles.exit
                : styles.active
              : ""
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;