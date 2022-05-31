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

export interface UserInfo {
  id: string;
  userId: string;
  nickname: string;
  followingCnt: number;
  followerCnt: number;
}
