import type { FC } from "react";
import Image from "next/image";
import styles from "./layout.module.scss";
import instagram from "../../assets/images/instagram-icon.png";
import whatsapp from "../../assets/images/whatsapp.svg";
import clsx from "clsx";

const copyRightYear: number = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <footer className="section">
      <div className={clsx("container", styles.footer)}>
        <div className={styles["footer__column"]}>
          <div className={styles["footer__title"]}>контактные телефоны</div>
          <a href="tel:+79331718154">+7 (933) 171-81-54</a>
        </div>
        <div className={styles["footer__column"]}>
          <div className={styles["footer__title"]}>мы в социальных сетях</div>
          <a
            className={styles["footer__instagram-link"]}
            href="https://www.instagram.com/incore_leather?igsh=bmYza3R1NHBzaTli"
            target="_blank"
          >
            <Image src={instagram} alt="Insta" />
          </a>
          <a href="tel:+79331718154" target="_blank">
            <Image src={whatsapp} alt="Whatsapp" width={33} />
          </a>
        </div>
        <div className={styles["footer__column"]}>
          <div className={styles["footer__title"]}>о нас</div>
          <p>&copy; INCORE, {copyRightYear} </p>
        </div>
      </div>
    </footer>
  );
};
