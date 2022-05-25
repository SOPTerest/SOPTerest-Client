import styled from 'styled-components';
import { IcCancel } from '../assets/icons';
import { FONT_STYLES } from '../styles/fonts/font';
import { BtClose } from '../assets/buttons';
import { useNavigate } from 'react-router-dom';

export default function BottomSheet({ onToggleModal }: any) {
  const navigate = useNavigate();

  const goBoardForm = () => {
    navigate('/create');
  };

  return (
    <StWrapper>
      <StBottomSheetWrapper>
        <StIcCancel onClick={onToggleModal} />
        <StButtonFormatWrapper>
          <StBottomSheetTitle>프로필에 추가</StBottomSheetTitle>
        </StButtonFormatWrapper>
        <StAddTitle>만들기</StAddTitle>
        <StMakeWebOption>웹사이트</StMakeWebOption>
        <StMakePictureOption>사진</StMakePictureOption>
        <StMakeTitle>추가</StMakeTitle>
        <StAddBoardOption onClick={goBoardForm}>보드</StAddBoardOption>
        <StButtonFormatWrapper>
          <StButtonWrapper onClick={onToggleModal} />
        </StButtonFormatWrapper>
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
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 457px;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  padding: 0px 10px;
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
  margin-top: 21px;
  ${FONT_STYLES.H3_BOLD}
`;

const StOptionFormat = styled.h3`
  position: absolute;
  left: 24px;
  ${FONT_STYLES.H3_BOLD}
`;

const StMakeWebOption = styled(StOptionFormat)`
  top: 110px;
`;

const StMakePictureOption = styled(StOptionFormat)`
  top: 153px;
`;

const StAddBoardOption = styled(StOptionFormat)`
  top: 238px;
  &:hover {
    cursor: pointer;
  }
`;

const StTitleFormat = styled.b`
  position: absolute;
  left: 24px;
`;

const StAddTitle = styled(StTitleFormat)`
  top: 210px;
  ${FONT_STYLES.B1_BOLD}
`;

const StMakeTitle = styled(StTitleFormat)`
  top: 80px;
  ${FONT_STYLES.B2_REGULAR}
`;

const StButtonWrapper = styled(BtClose)`
  position: absolute;
  bottom: 107px;
  &:hover {
    cursor: pointer;
  }
`;

const StButtonFormatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
