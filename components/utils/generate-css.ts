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

const getCssProperty = (property: string): string => {
  switch (property) {
    case 'align': {
      return 'alignItems';
    }
    case 'bgColor': {
      return 'backgroundColor';
    }
    case 'dir': {
      return 'direction';
    }
    case 'justify': {
      return 'justifyContent';
    }
    case 'm': {
      return 'margin';
    }
    case 'p': {
      return 'padding';
    }
    default:
      return property;
  }
};

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
      const cssProperty = getCssProperty(property);
      const cssPropertyCss = generatePropertyCss<GenericCSSType<CSSProperties>>(
        properties[property],
        cssProperty
      );

      css = mergeDeep(css, cssPropertyCss);
    }
  }

  return css;
};
