import PinBoard from '../components/PinBoard';
import { PinBoardInfo, PinInfo } from '../types/pin';

export default function Pin() {
  const pinList: PinInfo[] = [
    {
      pin_img:
        'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    },
    {
      pin_img:
        'https://images.unsplash.com/photo-1652816437851-2eab839b89ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387',
    },
    {
      pin_img:
        'https://images.unsplash.com/photo-1652487346667-b89061ca7b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',
    },
    {
      pin_img:
        'https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  const pinBoardList: PinBoardInfo[] = [
    { title: '자연', pinList: pinList, savedTime: '방금' },
    { title: '바닷가', pinList: pinList, savedTime: '방금' },
    { title: '제주도', pinList: pinList, savedTime: '방금' },
  ];
  return <PinBoard pinBoardList={pinBoardList} />;
}
