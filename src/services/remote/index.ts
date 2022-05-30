import { Service } from '..';
import { getRelativeTime } from '../../utils/time';
import { API } from './base';

export function remoteService(): Service {
  const getBoardDetail = async (boardID: string) => {
    const response = await API.get({ url: `/board/${boardID}` });
    if (response.success)
      return {
        title: response.data.boardName,
        savedTime: getRelativeTime(new Date(response.data.createdAt)),
      };
    else throw '서버 통신 실패';
  };

  return { getBoardDetail };
}
