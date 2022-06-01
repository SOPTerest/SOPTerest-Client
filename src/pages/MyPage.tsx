import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { IcSearch, IcPlus, icSetting } from '../assets/icons';
import { BoardListInfo } from '../types';
import { FONT_STYLES } from '../styles/font';
import { COLOR } from '../styles/color';
import { service } from '../services';
import { UserInfo } from '../types';
import { MOCK_DATA } from '../services/mock/data';
import BoardList from '../components/BoardList';
import MyPageNavigation from '../components/MyPageNavigation';
import BottomSheet from '../components/BottomSheet';

export default function MyPage() {
  const [boardInfo, setBoardInfo] = useState<BoardListInfo[]>();
  const [userInfo, setUserInfo] = useState<Omit<UserInfo, 'id'>>();
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen((prev: boolean) => !prev);
  };

  const getUserInfo = async () => {
    const userId = MOCK_DATA.USER.userId;
    const response = await service.getUserInfo(userId);
    response && setUserInfo(response);
  };

  const getBoardListInfo = async () => {
    const userId = MOCK_DATA.USER.userId;
    const response = await service.getBoardList(userId);
    response && setBoardInfo(response);
  };

  useEffect(() => {
    getUserInfo();
    getBoardListInfo();
  }, []);

  return (
    <StWrapper>
      <StHeader>
        <StSearchBarWrapper>
          <StSearchInput />
          <StSearchIcon />
        </StSearchBarWrapper>
        <IcPlus />
        <StIcon src={icSetting} />
      </StHeader>

      <StProfileImage src="https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      {userInfo && (
        <StProfileInfoWrapper>
          <StUserName>{userInfo.nickname}</StUserName>
          <StUserId>@{userInfo.userId}</StUserId>
          <StFollowInfoWrapper>
            <span>팔로워 {userInfo.followerCnt}명</span>
            <span>팔로잉 {userInfo.followingCnt}명</span>
          </StFollowInfoWrapper>
        </StProfileInfoWrapper>
      )}
      <StShareButton>공유</StShareButton>

      <StTabWrapper>
        <StTab active={false}>생성됨</StTab>
        <StTab active={true}>저장됨</StTab>
      </StTabWrapper>

      {boardInfo && <BoardList boardList={boardInfo} />}
      <MyPageNavigation toggleModal={toggleModal} />
      {open && <BottomSheet onToggleModal={toggleModal} />}
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 97px;
`;
const StHeader = styled.header`
  display: flex;
  width: 100%;
  height: 72px;
  justify-content: space-between;
  align-items: center;
`;
const StSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 70%;
  margin-left: 10px;
`;
const StSearchInput = styled.input`
  width: 100%;
  height: 48px;
  border: 2px solid ${COLOR.GRAY_200};
  border-radius: 24px;
  padding: 16px 35px;
`;
const StSearchIcon = styled(IcSearch)`
  position: absolute;
  top: 16px;
  left: 14px;
`;
const StIcon = styled.img`
  cursor: pointer;
  margin-right: 10px;
`;
const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: fill;
  padding-bottom: 3px;
`;
const StProfileInfoWrapper = styled(FlexColumnBox)`
  padding: 3px 0 18px 0;
`;
const StUserName = styled.h1`
  ${FONT_STYLES.H1_BOLD};
  font-size: 36px;
`;
const StUserId = styled.p`
  ${FONT_STYLES.B2_REGULAR};
  color: ${COLOR.GRAY_100};
  font-size: 16px;
  padding: 2px 0 19px 0;
`;
const StFollowInfoWrapper = styled.div`
  ${FONT_STYLES.B1_BOLD};
  display: flex;
  gap: 17px;
  font-size: 16px;
`;
const StShareButton = styled.button`
  ${FONT_STYLES.B1_BOLD};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 48px;
  font-size: 16px;
  background-color: ${COLOR.GRAY_300};
  border-radius: 24px;
`;
const StTabWrapper = styled.div`
  display: flex;
  gap: 31px;
  margin: 52px 0 25px 0;
`;
const StTab = styled.div<{ active: boolean }>`
  ${FONT_STYLES.B1_BOLD}
  color:${COLOR.BLACK};

  &::after {
    ${({ active }) =>
      active &&
      css`
        display: block;
        content: '';
        width: 40px;
        height: 0px;
        background: #000;
        border-radius: 10px;
        margin-top: 10px;
        border: 2px solid #000000;
      `}
  }
`;
