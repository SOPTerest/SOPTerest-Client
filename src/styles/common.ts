import { css } from 'styled-components';

export const COMMON_TOAST = css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeout 1s;
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
