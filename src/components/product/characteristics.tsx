import type { FC } from "react";
import type { CharacteristicType } from "@/types/productType";
import styles from "@/components/product/characteristics.module.scss";

interface CharacteristicsProps {
  characteristics: CharacteristicType[];
}
export const Characteristics: FC<CharacteristicsProps> = ({
  characteristics,
}) => {
  return (
    <div className={styles.characteristics}>
      <div className={styles["characteristics__title"]}>Характеристики</div>
      <div className={styles["characteristics__wrapper"]}>
        {characteristics.map((element: CharacteristicType, index: number) => {
          return (
            <div key={index} className={styles["characteristics__item"]}>
              <div className={styles["characteristics__name"]}>
                {element.name}
              </div>
              <div>{element.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
