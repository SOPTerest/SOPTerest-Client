import styled from 'styled-components';
import { COLOR } from '../styles/color';
import { ReactComponent as SearchIcon } from '../assets/icon_search.svg';
import { ReactComponent as PlusIcon } from '../assets/icon_plus.svg';
import { ReactComponent as SettingIcon } from '../assets/icon_setting.svg';

function MyPageHeader() {
  return (
    <StWrapper>
      <StSearchBarWrapper>
        <StSearchInput />
        <StSearchIcon />
      </StSearchBarWrapper>
      <PlusIcon />
      <SettingIcon />
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
const StSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 16px;
  left: 14px;
`;
export default MyPageHeader;
