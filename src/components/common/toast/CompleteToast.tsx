import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { toastState } from '../../../stores';
import { IcBlueCheck } from '../../../assets/icons';
import { COMMON_TOAST } from '../../../styles/common';
import { COLOR } from '../../../styles/color';
import { FONT_STYLES } from '../../../styles/font';

export default function CompleteToast() {
  const toast = useRecoilValue(toastState);
  return (
    <StCompleteToast>
      <IcBlueCheck />
      <div>{toast.message}</div>
    </StCompleteToast>
  );
}

const StCompleteToast = styled.div`
  ${COMMON_TOAST}
  top: 496px;
  width: calc(100% - 20px);
  padding: 24px 22px;
  border-radius: 14px;
  background-color: ${COLOR.WHITE};
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  & > *:last-child {
    margin-left: 15px;
    ${FONT_STYLES.B1_BOLD}
  }
`;
