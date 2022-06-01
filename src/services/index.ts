import { BoardInfo, BoardID, CreateBoardBody } from '../types';
import { remoteService } from './remote';

export const service = getAPIMethod();

function getAPIMethod() {
  return remoteService();
}

export interface Service {
  getBoardDetail(boardID: string): Promise<Pick<BoardInfo, 'title' | 'savedTime'>>;
  createBoard(body: CreateBoardBody): Promise<BoardID>;
}
