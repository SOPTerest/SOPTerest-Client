import PinBoard from '../components/BoardList';
import { BoardInfo, BoardPinInfo } from '../types';

export default function MyPage() {
  const boardList: BoardPinInfo[] = [
    {
      id: 0,
      pinImg:
        'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    },
    {
      id: 1,
      pinImg:
        'https://images.unsplash.com/photo-1652816437851-2eab839b89ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387',
    },
    {
      id: 2,
      pinImg:
        'https://images.unsplash.com/photo-1652487346667-b89061ca7b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',
    },
    {
      id: 3,
      pinImg:
        'https://images.unsplash.com/photo-1638913658828-afb88c3d4d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  const BoardList: BoardInfo[] = [
    { id: 0, title: '자연', boardList: boardList, savedTime: '방금' },
    { id: 1, title: '바닷가', boardList: boardList, savedTime: '방금' },
    { id: 2, title: '제주도', boardList: boardList, savedTime: '방금' },
  ];
  return <PinBoard BoardList={BoardList} />;
}
