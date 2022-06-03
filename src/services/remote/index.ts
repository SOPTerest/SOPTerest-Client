import { Service } from '..';
import { BoardCreateRequestBody, Res } from '../../types';
import { getRelativeTime } from '../../utils/time';
import { API } from './base';

export function remoteService(): Service {
  const getBoardDetail = async (boardID: string) => {
    const response = await API.get({ url: `/board/${boardID}` });
    if (response.success) {
      return {
        title: response.data.boardName,
        savedTime: getRelativeTime(new Date(response.data.updatedAt)),
      };
    } else throw '서버 통신 실패';
  };

  const createBoard = async (body: BoardCreateRequestBody) => {
    const response = await API.post({ url: `/board`, data: body });
    if (response.success)
      return {
        boardId: response.data._id,
        isSuccess: true,
      };
    else throw '서버 통신 실패';
  };

  const getUserInfo = async (userId: string) => {
    const response = await API.get({ url: `/user/${userId}` });
    if (response.success)
      return {
        userId: response.data.userId,
        nickname: response.data.nickname,
        followerCnt: response.data.followerCnt,
        followingCnt: response.data.followingCnt,
      };
    else throw '서버 통신 실패';
  };

  const getBoardList = async (userId: string) => {
    const response = await API.get({ url: `/board/list/${userId}` });

    if (response.success) {
      return response.data.map((res: Res) => ({
        boardId: res.boardId,
        boardName: res.boardName,
        imageList: res.imageList,
        pinCnt: res.pinCnt,
        updateTime: getRelativeTime(new Date(res.updateTime)),
      }));
    } else throw '서버 통신 실패';
  };

  return { getBoardDetail, createBoard, getUserInfo, getBoardList };
}
