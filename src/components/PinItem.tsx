import styled, { css } from 'styled-components';
import { PinBoardInfo, PinInfo } from '../types/pin';
import { FONT_STYLES } from '../styles/fonts/font';
import { COLOR } from '../styles/color';

interface PinImageProps {
  idx: number;
}

interface PinItemProps {
  pin: PinBoardInfo;
}

export default function PinItem({ pin }: PinItemProps) {
  return (
    <StPinItem>
      <StPinImageBoard>
        {pin.pinList.map(
          (pinItem: PinInfo, idx: number) =>
            idx < 3 && (
              <StImageWrapper idx={idx}>
                <StPinImage src={pinItem.pin_img} key={idx} />
              </StImageWrapper>
            ),
        )}
      </StPinImageBoard>
      <StPinInfoWrapper>
        <StPinTitle>{pin.title}</StPinTitle>
        <StPinCount>핀 {pin.pinList.length}개</StPinCount>
        <StPinSavedTime>{pin.savedTime}</StPinSavedTime>
      </StPinInfoWrapper>
    </StPinItem>
  );
}

const StPinItem = styled.li`
  display: flex;
  flex-direction: column;
`;
const StPinImageBoard = styled.article`
  width: 173px;
  height: 115px;
  display: grid;
  grid-template-columns: 115px 57px;
  grid-template-rows: 57px 57px;
  grid-gap: 0.5px 1px;
  border-radius: 13px;
  overflow: hidden;
`;
const StImageWrapper = styled.div<PinImageProps>`
  width: 115px;
  height: 115px;
  ${({ idx }) =>
    idx === 1 &&
    css`
      width: 57px;
      height: 57px;
      grid-column: 2/3;
      grid-row: 1/2;
    `}
  ${({ idx }) =>
    idx === 2 &&
    css`
      width: 57px;
      height: 58px;
      grid-column: 2/3;
      grid-row: 2/3;
    `}
`;
const StPinImage = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
`;
const StPinInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;
const StPinTitle = styled.strong`
  ${FONT_STYLES.B1_BOLD};
`;
const StPinCount = styled.p`
  ${FONT_STYLES.B4_REGULAR};
  padding-top: 4px;
`;
const StPinSavedTime = styled.p`
  ${FONT_STYLES.B4_REGULAR};
  color: ${COLOR.GRAY_100};
`;
