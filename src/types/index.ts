import { z } from 'zod';

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

export type BoardCreateRequestBody = {
  boardName: string;
  updateTime: string;
  writer: string;
};

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
const Res = z.object({
  boardName: z.string(),
  imageList: z.array(z.string()),
  pinCnt: z.number(),
  updateTime: z.date(),
});

export type Res = z.infer<typeof Res>;
