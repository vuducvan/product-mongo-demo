export interface IDescription {
  lang: string;

  value: string;
}

export interface ICategory {
  name: string;
}

export interface IImage {
  high: string;

  width: string;

  src: string;
}

export interface IBranch {
  name: string;
}

export interface IShape {
  weight: number;

  height: number;
}

export interface IProduct {
  name: string;

  description: IDescription;

  category: ICategory;

  branch: IBranch;

  size: string;

  color: string;

  image: IImage[];

  shape: IShape;

  origin: string;

  price: number;

  amount: number;

  isDelete: number;

  createdAt: Date;

  createdBy: string;

  updatedAt: Date;

  updatedBy: string;
}
