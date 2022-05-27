import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IcBlueCheck } from '../../assets/icons';
import useToast from '../../hooks/useToast';
import { toastState } from '../../stores';
import { COLOR } from '../../styles/color';
import { FONT_STYLES } from '../../styles/font';

export default function Toast() {
  const toast = useRecoilValue(toastState);
  const { hideToast } = useToast();
  const CompleteToast = (
    <StCompleteToast>
      <IcBlueCheck />
      <div>{toast.message}</div>
    </StCompleteToast>
  );
  const getToast = () => {
    switch (toast.mode) {
      case 'COMPLETE':
        return CompleteToast;
      case null:
        return <></>;
    }
  };
  useEffect(() => {
    if (toast.mode) hideToast();
  }, [toast]);
  return <StWrapper>{getToast()}</StWrapper>;
}

const StWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  & > * {
    z-index: 2000;
  }
`;

const StCompleteToast = styled.div`
  width: calc(100% - 20px);
  padding: 24px 22px;
  position: absolute;
  border-radius: 14px;
  background-color: ${COLOR.WHITE};
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  top: 496px;
  animation: fadeout 1s;
  & > *:last-child {
    margin-left: 15px;
    ${FONT_STYLES.B1_BOLD}
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
