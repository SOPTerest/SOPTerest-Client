import styled from 'styled-components';
import { PinBoardInfo } from '../types/pin';
import PinItem from './PinItem';

interface PinBoardProps {
  pinBoardList: PinBoardInfo[];
}

export default function PinBoard({ pinBoardList }: PinBoardProps) {
  return (
    <StWrapper>
      {pinBoardList.map((pin: PinBoardInfo, idx: number) => (
        <PinItem pin={pin} key={idx} />
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
