import type { FC } from "react";
import clsx from "clsx";

interface ColorsProps {
  colors: string[];
}

export const Colors: FC<ColorsProps> = ({ colors }) => {
  return (
    <div className="colors">
      <div>Цвета:</div>
      <ul className="colors__wrapper">
        {colors.map((color: string, index: number) => (
          <li
            key={index}
            className={clsx("colors__item", "colors_" + color)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
