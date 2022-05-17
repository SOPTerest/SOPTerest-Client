import { css } from 'styled-components';

interface Font {
  size: number;
  weight: 'R' | 'B';
  type: 'h1' | 'h2' | 'h3' | 'b1' | 'b2' | 'b3' | 'b4';
}

const getFontWeight = (weight: Font['weight']) => {
  switch (weight) {
    case 'R':
      return 500;
    case 'B':
      return 700;
  }
};

const getLineHeight = (type: Font['type']) => {
  switch (type) {
    case 'h1':
      return 39;
    case 'h2':
      return 28;
    case 'h3':
      return 50;
    case 'b1':
      return 22;
    case 'b2':
      return 21;
    case 'b3':
      return 18;
    case 'b4':
      return 16;
  }
};

export const FONT = ({ size, weight, type }: Font) => css`
  font-family: 'Apple SD Gothic Neo';
  font-size: ${size}px;
  font-weight: ${getFontWeight(weight)};
  line-height: ${getLineHeight(type)}px;
`;

export const FONT_STYLES = {
  B1_BOLD: FONT({ size: 16, weight: 'B', type: 'b1' }),
  B2_REGULAR: FONT({ size: 16, weight: 'R', type: 'b2' }),
  B3_REGULAR: FONT({ size: 14, weight: 'R', type: 'b3' }),
  B4_REGULAR: FONT({ size: 12, weight: 'R', type: 'b4' }),
  H1_BOLD: FONT({ size: 36, weight: 'B', type: 'h1' }),
  H2_BOLD: FONT({ size: 20, weight: 'B', type: 'h2' }),
  H3_BOLD: FONT({ size: 36, weight: 'B', type: 'h3' }),
};
