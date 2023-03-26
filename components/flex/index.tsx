import React from 'react';

import { generateCss } from '../utils/generate-css';
import { StyledFlex } from './styles';
import { FlexProps } from './types';

const Flex = ({
  align,
  bgColor,
  children,
  columnGap,
  dir = 'row',
  flex = 1,
  gap,
  height,
  justify,
  m,
  p,
  rowGap,
  width,
  ...flexProps
}: FlexProps) => {
  const css = generateCss({
    align,
    bgColor,
    columnGap,
    dir,
    flex,
    gap,
    height,
    justify,
    m,
    p,
    rowGap,
    width,
  });

  return (
    <StyledFlex css={css} {...flexProps}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
