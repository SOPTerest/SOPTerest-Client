import { BoardInfo } from '../types';
import { mockService } from './mock';

export const service = getAPIMethod();

function getAPIMethod() {
  return mockService();
}

export interface Service {
  getBoardDetail(boardID: string): Promise<Pick<BoardInfo, 'title' | 'savedTime'>>;
}
