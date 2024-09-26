import { CategoriesType } from "@/entities/category";

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface Intervals {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export type SkeletonType = "item" | "banner";
export type DirectionType = "column" | "row";
