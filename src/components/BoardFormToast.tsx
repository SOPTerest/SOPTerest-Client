import styled, { keyframes } from 'styled-components';

export default function BoardFormToast() {
  return <StWrapper>글자 수가 넘쳤어요!</StWrapper>;
}

const toastAnimation = keyframes`
0% {
    opacity: 100%;
}
100% {
    opacity: 0%;
}
`;

const StWrapper = styled.div`
  position: absolute;
  top: 298px;
  background-color: #111111;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 253px;
  height: 58px;
  border-radius: 34px;
  animation: ${toastAnimation} 1s linear 1;
`;
