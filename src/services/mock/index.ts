import { Service } from '..';
import { getRelativeTime } from '../../utils/time';

export function mockService(): Service {
  const getBoardDetail = async () => {
    await wait(2000);
    return { title: '개', savedTime: getRelativeTime(new Date('2022-05-27T15:11:44.933Z')) };
  };

  return { getBoardDetail };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
