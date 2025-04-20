// src/components/HeroSection.tsx
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Transforme sua rotina com o GoWhere</h1>
        <p>Explore experiências, cuide da sua mente e crie hábitos saudáveis, tudo em um só lugar.</p>
        <a href="#features" className={styles.cta}>
          Conhecer mais
        </a>
      </div>
    </section>
  );
}
