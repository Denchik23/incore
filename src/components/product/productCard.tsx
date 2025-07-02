import type { FC } from "react";
import type { ProductType } from "@/types/productType";
import Image from "next/image";
import { Colors } from "@/components/product/colors";
import styles from "@/components/product/productCard.module.scss";
import clsx from "clsx";
import Link from "next/link";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.product}>
      <Image
        src={"/images/" + product.image.src}
        width={product.image.width}
        height={product.image.height}
        alt={product.title}
        className={styles["product__image"]}
      />
      <div className={styles["product__wrapper"]}>
        <Colors colors={product.colors} />
        <Link
          href={"/catalog/" + product.link}
          className={styles["product__title"]}
        >
          {product.title}
        </Link>
        <div className={styles["product__price"]}>
          {product.price.toLocaleString()} руб.
        </div>
        <Link
          href={"/catalog/" + product.link}
          className={clsx("button", styles["product__button"])}
        >
          Выбрать
        </Link>
      </div>
    </div>
  );
};
