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
