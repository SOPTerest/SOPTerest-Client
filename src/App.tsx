import GlobalStyle from './styles/global';
import Router from './components/Router';
import Toast from './components/common/toast';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Toast />
      <Router />
    </RecoilRoot>
  );
}
