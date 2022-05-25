import styled from 'styled-components';
import { BoardInfo } from '../types';
import BoardItem from './BoardItem';

interface BoardListProps {
  boardList: BoardInfo[];
}

export default function BoardList({ boardList }: BoardListProps) {
  return (
    <StWrapper>
      <StBoardListWrapper>
        {boardList.map((board: BoardInfo) => (
          <BoardItem board={board} key={board.id} />
        ))}
      </StBoardListWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
`;
const StBoardListWrapper = styled.div`
  display: flex;
  width: 355px;
  flex-wrap: wrap;
  gap: 6px 9px;
`;
