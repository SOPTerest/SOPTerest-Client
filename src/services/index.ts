import { BoardInfo, BoardCreateRequestBody } from '../types';
import { remoteService } from './remote';

export const service = getAPIMethod();

function getAPIMethod() {
  return remoteService();
}

export interface Service {
  getBoardDetail(boardID: string): Promise<Pick<BoardInfo, 'title' | 'savedTime'>>;
  createBoard(body: BoardCreateRequestBody): Promise<{
    boardId: string;
    isSuccess: boolean;
  }>;
}
