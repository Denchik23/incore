import Image from "next/image";
import logo from "../assets/images/logo.png";
import mainSlide from "../assets/images/main-slide.jpg";
import material from "../assets/images/material.jpg";
import different from "../assets/images/different.jpg";
import colors from "../assets/images/colors.jpg";
import styles from "./page.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={clsx("container section", styles.breand)}>
        <div>
          <Image src={logo} alt="InCore" />
          <div className={styles["breand__text"]}>
            <h1>Кожаные изделия ручной работы</h1>
            <p className={styles["breand__intro"]}>
              искусство и комфорт в одном
            </p>
          </div>
          <Link href="/" className="link-button">
            Заказать
          </Link>
        </div>
        <div className={styles["breand__image-wrapper"]}>
          <Image
            src={mainSlide}
            alt="Кожанные изделия"
            className={styles["breand__image"]}
          />
        </div>
      </main>
      <div className="container section">
        <div className="title">Почему именно мы?</div>
        <div className="title">Почему натуральная кожа?</div>
        <div className={styles.advantages}>
          <article className={styles["advantages__item"]}>
            <Image
              src={material}
              alt="Долговечный материал"
              className={styles["advantages__image"]}
            />
            <div className={styles["advantages__wrapper"]}>
              <h2 className={styles["advantages__title"]}>Материал</h2>
              <p>
                Натуральная кожа — это прочный, долговечный и красивый материал,
                получаемый из шкур животных. Обладает естественной красотой,
                уникальностью и комфортом. Устойчива к истиранию и экологична.
              </p>
            </div>
          </article>
          <article className={styles["advantages__item"]}>
            <Image
              src={different}
              alt="Фурнитура"
              className={styles["advantages__image"]}
            />
            <div className={styles["advantages__wrapper"]}>
              <h2 className={styles["advantages__title"]}>Фурнитура</h2>
              <p>
                Высококачественная фурнитура премиум-класса, отличается
                прочностью, долговечностью и надёжностью. Она проходят
                многоуровневый контроль качества, благодаря чему изделия с такой
                фурнитурой служат дольше и не подводят даже в сложных условиях.
              </p>
            </div>
          </article>
          <article className={styles["advantages__item"]}>
            <Image
              src={colors}
              alt="Расцветка"
              className={styles["advantages__image"]}
            />
            <div className={styles["advantages__wrapper"]}>
              <h2 className={styles["advantages__title"]}>Расцветка</h2>
              <p>
                Любое изделие INCORE можно заказать в индивидуальных размерах и
                в разных цветах, которые комбинируется на выбор покупателя.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
