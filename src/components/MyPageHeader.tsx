import styled from 'styled-components';
import { COLOR } from '../styles/color';
import { IcSearch, icPlus, icSetting } from '../assets/icons';

function MyPageHeader() {
  return (
    <StWrapper>
      <StSearchBarWrapper>
        <StSearchInput />
        <StSearchIcon />
      </StSearchBarWrapper>
      <StIcon src={icPlus} />
      <StIcon src={icSetting} />
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  justify-content: space-around;
  align-items: center;
`;
const StSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 70%;
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
`;
export default MyPageHeader;
