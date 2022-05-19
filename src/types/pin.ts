export interface PinInfo {
  pin_img: string;
}
export interface PinBoardInfo {
  title: string;
  pinList: PinInfo[];
  saved_time: Date;
}
