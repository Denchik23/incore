"use client";

import type { FC } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "@/components/product/productSlider.module.scss";
import clsx from "clsx";

interface ProductSliderProps {
  slides: string[];
}

export const ProductSlider: FC<ProductSliderProps> = ({ slides }) => {
  const options: EmblaOptionsType = {
    loop: true,
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={styles["embla"]} ref={emblaMainRef}>
      <div className={styles["embla__container"]}>
        {slides.map((slide: string, index: number) => (
          <div className={styles["embla__slide"]} key={index}>
            <Image
              src={"/images/" + slide}
              width="800"
              height="800"
              alt="sliede-item"
              className={styles["embla__image"]}
            />
          </div>
        ))}
      </div>
      <div className={styles["embla-thumbs"]}>
        {slides.map((slide: string, index: number) => {
          return (
            <button
              key={index}
              onClick={() => onThumbClick(index)}
              type="button"
              className={clsx(
                styles["embla-thumbs__slide"],
                selectedIndex === index
                  ? styles["embla-thumbs__slide--selected"]
                  : "",
              )}
            >
              <Image
                src={"/images/" + slide}
                width="200"
                height="200"
                alt="sliede-item-thumb"
                className={styles["embla-thumbs__image"]}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
