import React from 'react';

import {
  AlignType,
  BackgroundColorType,
  ColumnGapType,
  DirectionType,
  FlexType,
  GapType,
  HeightType,
  JustifyType,
  MarginType,
  PaddingType,
  RowGapType,
  WidthType,
} from '../utils/types';

export type FlexProps = React.ComponentPropsWithRef<'div'> & {
  align?: AlignType;
  bgColor?: BackgroundColorType;
  children?: React.ReactNode;
  columnGap?: ColumnGapType;
  dir?: DirectionType;
  flex?: FlexType;
  gap?: GapType;
  height?: HeightType;
  justify?: JustifyType;
  m?: MarginType;
  p?: PaddingType;
  rowGap?: RowGapType;
  width?: WidthType;
};
