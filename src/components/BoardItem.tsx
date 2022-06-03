import styled, { css } from 'styled-components';
import { BoardListInfo } from '../types';
import { FONT_STYLES } from '../styles/font';
import { COLOR } from '../styles/color';
import { useNavigate } from 'react-router-dom';

interface BoardItemProps {
  board: BoardListInfo;
}

export default function BoardItem({ board }: BoardItemProps) {
  const navigate = useNavigate();

  const onClickBoardItem = () => {
    navigate(`/board/${board.boardId}`);
  };
  return (
    <StWrapper>
      <StPinImageWrapper onClick={onClickBoardItem}>
        {board.imageList.length ? (
          board.imageList.slice(0, 3).map((pinImage: string, idx: number) => (
            <StImageWrapper idx={idx} key={idx}>
              <StPinImage src={pinImage} />
            </StImageWrapper>
          ))
        ) : (
          <>
            {Array.from({ length: 3 }, (_v, i) => i).map((idx) => (
              <StImageWrapper key={idx} idx={idx}>
                <div></div>
              </StImageWrapper>
            ))}
          </>
        )}
      </StPinImageWrapper>

      <StPinInfoWrapper>
        <StPinTitle>{board.boardName}</StPinTitle>
        <StPinCount>핀 {board.pinCnt}개</StPinCount>
        <StPinSavedTime>{board.updateTime}</StPinSavedTime>
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
  height: fit-content;
  display: grid;
  grid-template-columns: 115px 57px;
  grid-template-rows: 57px 57px;
  grid-gap: 1px 1px;
  border-radius: 13px;
  overflow: hidden;
`;
const StImageWrapper = styled.div<{ idx: number }>`
  width: 100%;
  height: 115px;
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
      height: 100%;
      grid-column: 2/3;
      grid-row: 2/3;
    `}
    & > div {
    width: 100%;
    height: 100%;
    background-color: ${COLOR.GRAY_300};
  }
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
