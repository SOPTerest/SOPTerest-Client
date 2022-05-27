import { IcSearchGray1, IcPlusGray1, IcChat, IcHome } from '../assets/icons';
import styled from 'styled-components';
import { COLOR } from '../styles/color';

export default function MyPageNavigation() {
  return (
    <StNavigationWrapper>
      <IcHome />
      <IcSearchGray1 />
      <IcPlusGray1 />
      <IcChat />
      <StNavProfile
        src="https://images.unsplash.com/photo-1566496875470-68ada46a38c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
        alt="profile"
      />
    </StNavigationWrapper>
  );
}
const StNavigationWrapper = styled.nav`
  position: sticky;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 60px;
  background: ${COLOR.WHITE};
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
`;
const StNavProfile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 12px;
`;
