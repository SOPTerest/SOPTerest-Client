import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { FONT_STYLES } from '../styles/font';
import { COLOR } from '../styles/color';

interface MyPageUserInfo {
  userId: string;
  nickname: string;
  followerCnt: number;
  followingCnt: number;
}

export default function MyPageUserInfo() {
  const [userInfo, setUserInfo] = useState<MyPageUserInfo>();

  useEffect(() => {
    setUserInfo({ userId: 'cheeze123', nickname: '치즈', followerCnt: 36, followingCnt: 54 });
  }, []);

  return (
    <StWrapper>
      <StProfileImage src="https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      {userInfo && (
        <StProfileInfoWrapper>
          <StUserName>{userInfo.nickname}</StUserName>
          <StUserId>@{userInfo.userId}</StUserId>
          <StFollowInfoWrapper>
            <strong>팔로워 {userInfo.followerCnt}명</strong>
            <strong>팔로잉 {userInfo.followingCnt}명</strong>
          </StFollowInfoWrapper>
        </StProfileInfoWrapper>
      )}
      <StShareButton>공유</StShareButton>
    </StWrapper>
  );
}

const FlexColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StWrapper = styled(FlexColumnBox)`
  width: 355px;
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
  margin-bottom: 52px;
`;
