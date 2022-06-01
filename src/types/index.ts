export interface BoardPinInfo {
  id: number;
  pinImg: string;
}
export interface BoardInfo {
  id: number;
  title: string;
  boardList: BoardPinInfo[];
  savedTime: string;
}

export type ToastMode = 'COMPLETE' | 'WARNING' | null;

export interface Toast {
  mode: ToastMode;
  message: string;
}

export type CreateBoardBody = {
  boardName: string;
  updateTime: string;
  writer: string;
};

export type BoardID = {
  boardId: string;
};
