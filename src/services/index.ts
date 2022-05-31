import { BoardInfo, UserInfo } from '../types';
import { mockService } from './mock';

export const service = getAPIMethod();

function getAPIMethod() {
  return mockService();
}

export interface Service {
  getBoardDetail(boardID: string): Promise<Pick<BoardInfo, 'title' | 'savedTime'>>;
  getUserInfo(
    userId: string,
  ): Promise<Pick<UserInfo, 'userId' | 'nickname' | 'followingCnt' | 'followerCnt'>>;
}
