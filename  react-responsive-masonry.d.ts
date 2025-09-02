// react-responsive-masonry.d.ts
declare module "react-responsive-masonry" {
  import * as React from "react";

  export interface ResponsiveMasonryProps {
    columnsCountBreakPoints: { [key: number]: number };
    gutterBreakPoints: { [key: number]: string };
    children: React.ReactNode;
  }

  export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;

  export interface MasonryProps {
    columnsCount?: number;
    gutter?: string;
    children: React.ReactNode;
  }

  const Masonry: React.FC<MasonryProps>;

  export default Masonry;
}