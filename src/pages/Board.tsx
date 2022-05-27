import { IcBack, icIdeaMore, icOrganize, IcPlus, IcViewMore } from '../assets/icons';
import styled from 'styled-components';
import { FONT_STYLES } from '../styles/font';
import { COLOR } from '../styles/color';
import { MOCK_DATA } from '../services/mock/data';

export default function Board() {
  return (
    <StWrapper>
      <StHeader>
        <IcBack /> <IcViewMore />
      </StHeader>
      <StTitle>바닷가</StTitle>
      <StCreateAt>방금</StCreateAt>
      <StProfile>
        <img src={MOCK_DATA.USER.image} alt="profile-image" />
        <IcPlus />
      </StProfile>
      <StButtonWrapper>
        <div>
          <img src={icIdeaMore} />
          <div>아이디어 더보기</div>
        </div>
        <div>
          <img src={icOrganize} />
          <div>정리하기</div>
        </div>
      </StButtonWrapper>
      <StEmptyPin>아직 이 보드에 아무 핀도 없습니다.</StEmptyPin>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`;

const StTitle = styled.h1`
  ${FONT_STYLES.H1_BOLD}
  color: ${COLOR.BLACK};
  margin-bottom: 1px;
`;

const StCreateAt = styled.div`
  ${FONT_STYLES.B2_REGULAR}
  color: ${COLOR.GRAY_100};
  margin-bottom: 24px;
`;

const StProfile = styled.div`
  position: relative;
  width: 80px;
  height: 48px;
  margin-bottom: 48px;
  & > img {
    width: 48px;
    height: 48px;
    border-radius: 48px;
    position: absolute;
  }
  & > img:first-child {
    z-index: 100;
  }
  & > img:last-child {
    padding: 13px;
    background-color: ${COLOR.GRAY_300};
    left: 32px;
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  gap: 17px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      width: 72px;
      height: 72px;
      border-radius: 24px;
      background-color: ${COLOR.GRAY_300};
      margin-bottom: 3px;
    }
    & > div {
      ${FONT_STYLES.B4_REGULAR}
      color: ${COLOR.BLACK}
    }
  }
  & > div:first-child {
    img {
      padding: 22px;
    }
  }
  & > div:last-child {
    img {
      padding: 24px;
    }
  }
`;

const StEmptyPin = styled.div`
  padding: 87px 78px 256px 78px;
  ${FONT_STYLES.B2_REGULAR}
`;
