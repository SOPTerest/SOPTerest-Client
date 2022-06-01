export interface BoardInfo {
  id: number;
  title: string;
  boardList: string[];
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
export interface BoardListInfo {
  boardName: string;
  imageList: string[];
  pinCnt: number;
  updateTime: string;
}
