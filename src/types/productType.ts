type ImageType = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export type CharacteristicType = {
  name: string;
  value: string;
};

export interface ProductType {
  link: string;
  title: string;
  description: string;
  image: ImageType;
  colors: string[];
  price: number;
  characteristics: CharacteristicType[];
  gallery: string[];
}
