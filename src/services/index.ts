import { BoardInfo, UserInfo } from '../types';
import { remoteService } from './remote';

export const service = getAPIMethod();

function getAPIMethod() {
  return remoteService();
}

export interface Service {
  getBoardDetail(boardID: string): Promise<Pick<BoardInfo, 'title' | 'savedTime'>>;
  getUserInfo(userId: string): Promise<Omit<UserInfo, 'id'>>;
}
