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
  width: 355px;
  height: 72px;
  justify-content: space-between;
  align-items: center;
`;
const StSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const StSearchInput = styled.input`
  width: 267px;
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
