import data from "@/assets/product-data.json";
import type { ProductType } from "@/types/productType";
import { notFound } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { ProductDetail } from "@/components/product/productDetail";
import { ProductSlider } from "@/components/product/productSlider";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentProduct = data.find((item: ProductType) => item.link === slug);
  if (currentProduct === undefined) {
    notFound();
  }
  return (
    <>
      <div className="container section">
        <nav className="bread-crumbs">
          <Link href="/" className="bread-crumbs__link">
            Главная
          </Link>
          <span className="bread-crumbs__separator">/</span>
          <Link href="/catalog" className="bread-crumbs__link">
            Каталог
          </Link>
          <span className="bread-crumbs__separator">/</span>
          <span>{currentProduct.title}</span>
        </nav>
      </div>
      <main className={clsx("container", "detail-section")}>
        <ProductSlider slides={currentProduct.gallery} />
        <ProductDetail product={currentProduct} />
      </main>
    </>
  );
}
