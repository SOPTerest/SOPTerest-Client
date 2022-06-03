import { Service } from '..';
import { getRelativeTime } from '../../utils/time';

export function mockService(): Service {
  const getBoardDetail = async () => {
    await wait(2000);
    return { title: '개', savedTime: getRelativeTime(new Date('2022-05-27T15:11:44.933Z')) };
  };

  const createBoard = async () => {
    await wait(2000);
    return { boardId: '6294a5c795d4a7e07140547a', isSuccess: true };
  };

  const getUserInfo = async () => {
    await wait(2000);
    return {
      userId: 'cheeze123',
      nickname: '치즈',
      followingCnt: 54,
      followerCnt: 36,
    };
  };

  const getBoardList = async () => {
    await wait(2000);
    return [
      {
        boardName: '자연',
        imageList: [
          'https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',

          'https://images.unsplash.com/photo-1652816437851-2eab839b89ad?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387',

          'https://images.unsplash.com/photo-1652487346667-b89061ca7b40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',
        ],
        pinCnt: 8,
        updateTime: getRelativeTime(new Date('2022-05-27T15:11:44.933Z')),
      },
    ];
  };
  return { getBoardDetail, getUserInfo, createBoard, getBoardList };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
