"use client";

import type { FC } from "react";
import type { ProductType } from "@/types/productType";
import { Button } from "@/components/ui/button/button";
import { Colors } from "@/components/product/colors";
import { Characteristics } from "@/components/product/characteristics";

interface ProductDetailProps {
  product: ProductType;
}

const handleClick = () => {
  console.log("handleClick");
};

export const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="detail-product__data">
      <h1 className="detail-product__title">{product.title}</h1>
      <div className="detail-product__price">
        {product.price.toLocaleString()} руб
      </div>
      <Colors colors={product.colors} />
      <div className="detail-product__action">
        <Button className="button_width" onClick={handleClick}>
          Заказать сейчас
        </Button>
      </div>
      <div className="detail-product__description">{product.description}</div>
      <Characteristics characteristics={product.characteristics} />
    </div>
  );
};
