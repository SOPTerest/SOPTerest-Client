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

  return { getBoardDetail, getUserInfo, createBoard };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
