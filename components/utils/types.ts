import { CSSProperties as StitchesCSSProperties } from '@stitches/react';
import { CSSProperties } from 'react';

export type GenericCSSType<T> =
  | T
  | {
      lg?: T;
      md?: T;
      sm?: T;
      xl?: T;
      xs?: T;
    };

export type AlignType = GenericCSSType<CSSProperties['alignItems']>;
export type BackgroundColorType = GenericCSSType<
  CSSProperties['backgroundColor'] | StitchesCSSProperties['backgroundColor']
>;
export type DirectionType = GenericCSSType<CSSProperties['flexDirection']>;
export type FlexType = GenericCSSType<CSSProperties['flex']>;
export type ColumnGapType = GenericCSSType<CSSProperties['columnGap']>;
export type ColorType = GenericCSSType<
  CSSProperties['color'] | StitchesCSSProperties['color']
>;
export type FontSizeType = GenericCSSType<
  CSSProperties['fontSize'] | StitchesCSSProperties['fontSize']
>;
export type FontStyleType = GenericCSSType<CSSProperties['fontStyle']>;
export type FontWeightType = GenericCSSType<
  CSSProperties['fontWeight'] | StitchesCSSProperties['fontWeight']
>;
export type GapType = GenericCSSType<CSSProperties['gap']>;
export type RowGapType = GenericCSSType<CSSProperties['rowGap']>;
export type HeightType = GenericCSSType<CSSProperties['height']>;
export type JustifyType = GenericCSSType<CSSProperties['justifyContent']>;
export type MarginType = GenericCSSType<
  CSSProperties['margin'] | StitchesCSSProperties['margin']
>;
export type PaddingType = GenericCSSType<
  CSSProperties['padding'] | StitchesCSSProperties['padding']
>;
export type TextAlignType = GenericCSSType<CSSProperties['textAlign']>;
export type WidthType = GenericCSSType<CSSProperties['width']>;
