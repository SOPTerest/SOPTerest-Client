import styled, { css } from 'styled-components';
import { BoardInfo, BoardPinInfo } from '../types';
import { FONT_STYLES } from '../styles/font';
import { COLOR } from '../styles/color';

interface BoardItemProps {
  board: BoardInfo;
}

export default function BoardItem({ board }: BoardItemProps) {
  return (
    <StWrapper>
      <StPinImageWrapper>
        {board.boardList.slice(0, 3).map(({ id, pinImg }: BoardPinInfo) => (
          <StImageWrapper idx={id} key={id}>
            <StPinImage src={pinImg} />
          </StImageWrapper>
        ))}
      </StPinImageWrapper>

      <StPinInfoWrapper>
        <StPinTitle>{board.title}</StPinTitle>
        <StPinCount>핀 {board.boardList.length}개</StPinCount>
        <StPinSavedTime>{board.savedTime}</StPinSavedTime>
      </StPinInfoWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.li`
  display: flex;
  flex-direction: column;
`;
const StPinImageWrapper = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 115px 57px;
  grid-template-rows: 57px 57px;
  grid-gap: 0.5px 1px;
  border-radius: 13px;
  overflow: hidden;
`;
const StImageWrapper = styled.div<{ idx: number }>`
  width: 100%;
  ${({ idx }) =>
    idx === 1 &&
    css`
      height: 100%;
      grid-column: 2/3;
      grid-row: 1/2;
    `}
  ${({ idx }) =>
    idx === 2 &&
    css`
      width: 100%;
      height: 100%;
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
