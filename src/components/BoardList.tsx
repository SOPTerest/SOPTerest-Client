import styled from 'styled-components';
import { BoardInfo } from '../types';
import BoardItem from './BoardItem';

interface BoardListProps {
  BoardList: BoardInfo[];
}

export default function BoardList({ BoardList }: BoardListProps) {
  return (
    <StWrapper>
      {BoardList.map((board: BoardInfo) => (
        <BoardItem board={board} key={board.id} />
      ))}
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 355px;
  gap: 6px 9px;
`;
