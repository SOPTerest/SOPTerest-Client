import GlobalStyle from './styles/global';
import Router from './components/Router';
import Toast from './components/common/Toast';
import styled from 'styled-components';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <StWrapper>
        <GlobalStyle />
        <Router />
        <Toast />
      </StWrapper>
    </RecoilRoot>
  );
}

const StWrapper = styled.div`
  position: relative;
  & > * {
    position: absolute;
  }
  & > *:first-child {
    z-index: 1000;
  }
`;
