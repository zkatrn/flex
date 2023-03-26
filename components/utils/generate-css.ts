import { CSSProperties } from 'react';

import { GenericCSSType } from './types';

export const isObject = (item: any) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 *
 * @param target
 * @returns
 */
export const cloneJson = (target: any) => {
  return JSON.parse(JSON.stringify(target));
};

export const mergeDeep = (target: any, ...sources: any): any => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

const cssMappedProperties = {
  align: 'alignItems',
  basis: 'flexBasis',
  bgColor: 'backgroundColor',
  dir: 'direction',
  grow: 'flexGrow',
  justify: 'justifyContent',
  m: 'margin',
  p: 'padding',
  shrink: 'flexShrink',
} as const;

export type CSSMappedPropertyType = keyof typeof cssMappedProperties;

/************************/

export const generatePropertyCss = <T>(cssType: T, property: string) => {
  if (!cssType) {
    return {};
  }
  let css = {};

  if (typeof cssType !== 'object') {
    css = { [property]: cssType };
  } else {
    for (const size in cssType) {
      css = {
        ...css,
        [`@${size}`]: {
          [property]: cssType[size],
        },
      };
    }
  }

  return css;
};

/************************/

export const generateCss = (properties: any) => {
  let css = {};

  for (const property in properties) {
    if (!!properties[property]) {
      const cssProperty =
        cssMappedProperties[property as CSSMappedPropertyType] || property;
      const cssPropertyCss = generatePropertyCss<GenericCSSType<CSSProperties>>(
        properties[property],
        cssProperty
      );

      css = mergeDeep(css, cssPropertyCss);
    }
  }

  return css;
};
