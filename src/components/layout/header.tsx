import type { FC } from "react";
import styles from "./layout.module.scss";
import clsx from "clsx";

export const Header: FC = () => {
  return (
    <header>
      <div className={clsx("container", styles.header)}>
        <div className={styles["link-phone"]}>
          <span className="icon icon_phone"></span>
          <a href="tel:+79331718154" target="_blank">
            +7 (933) 171-81-54
          </a>
        </div>
        <div className={styles["link-instagram"]}>
          <span className="icon icon_instagram"></span>
          <a href="https://www.instagram.com/incore_leather?igsh=bmYza3R1NHBzaTli">
            посетите нашу страницу
          </a>
        </div>
      </div>
    </header>
  );
};
