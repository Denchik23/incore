import clsx from "clsx";
import Link from "next/link";
import data from "../../assets/product-data.json";
import { ProductCard } from "@/components/product/productCard";
import type { ProductType } from "@/types/productType";

export default function Catalog() {
  return (
    <>
      <div className="container section">
        <nav className="bread-crumbs">
          <Link href="/" className="bread-crumbs__link">
            Главная
          </Link>
          <span className="bread-crumbs__separator">/</span>
          <span>Каталог</span>
        </nav>
      </div>
      <main className={clsx("container")}>
        <div className="products">
          {data.map((product: ProductType, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
