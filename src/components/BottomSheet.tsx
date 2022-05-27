import styled from 'styled-components';
import { IcCancel } from '../assets/icons';
import { FONT_STYLES } from '../styles/fonts/font';
import { useNavigate } from 'react-router-dom';
import { COLOR } from '../styles/color';

interface BottomSheetProps {
  onToggleModal: () => void;
}

export default function BottomSheet({ onToggleModal }: BottomSheetProps) {
  const navigate = useNavigate();

  const goBoardForm = () => {
    navigate('/create');
  };

  return (
    <StWrapper>
      <StBottomSheetWrapper>
        <StFormatWrapper>
          <StIcCancel onClick={onToggleModal} />
          <StBottomSheetTitle>프로필에 추가</StBottomSheetTitle>
        </StFormatWrapper>
        <StAddTitle>만들기</StAddTitle>
        <StMakeWebOption>웹사이트</StMakeWebOption>
        <StMakePictureOption>사진</StMakePictureOption>
        <StMakeTitle>추가</StMakeTitle>
        <StAddBoardOption onClick={goBoardForm}>보드</StAddBoardOption>
        <StButtonWrapper onClick={onToggleModal}>닫기</StButtonWrapper>
      </StBottomSheetWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StBottomSheetWrapper = styled.div`
  background-color: ${COLOR.WHITE};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 457px;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  padding: 0px 10px;
  & > *:not(& > *:first-child),
  & > *:not(& > *:last-child) {
    width: 100%;
    margin-left: 24px;
  }
`;

const StIcCancel = styled(IcCancel)`
  position: absolute;
  top: 23px;
  left: 23px;
  &:hover {
    cursor: pointer;
  }
`;

const StBottomSheetTitle = styled.h3`
  position: absolute;
  top: 21px;
  left: 50%;
  transform: translateX(-50%);
  ${FONT_STYLES.H3_BOLD}
`;

const StMakeWebOption = styled.span`
  margin-top: 9px;
  ${FONT_STYLES.H3_BOLD}
`;

const StMakePictureOption = styled.span`
  margin-top: 15px;
  ${FONT_STYLES.H3_BOLD}
`;

const StAddBoardOption = styled.span`
  margin-top: 6px;
  &:hover {
    cursor: pointer;
  }
  ${FONT_STYLES.H3_BOLD}
`;

const StAddTitle = styled.span`
  margin-top: 33px;
  ${FONT_STYLES.B1_BOLD};
`;

const StMakeTitle = styled.span`
  margin-top: 29px;
  ${FONT_STYLES.B2_REGULAR}
`;

const StButtonWrapper = styled.button`
  position: absolute;
  bottom: 107px;
  width: 60px;
  height: 48px;
  border-radius: 24px;
  background-color: ${COLOR.GRAY_300};
  border: 0;
  outline: 0;
  ${FONT_STYLES.B1_BOLD}
  &:hover {
    cursor: pointer;
  }
`;

const StFormatWrapper = styled.div`
  width: 100%;
  height: 28px;
  position: relative;
  display: flex;
  justify-content: center;
`;
