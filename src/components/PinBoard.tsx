import styled from 'styled-components';
import { ReactComponent as StViewMoreIcon } from '../assets/icons/icon_viewmore.svg';
import { PinInfo } from '../types/pin';

interface PinProps {
  pinList: PinInfo[];
}

export default function CommonPinList({ pinList }: PinProps) {
  return (
    <StPinWrapper>
      <StPinLists>
        {pinList.map((pin) => {
          if (pin.id < pinList.length / 2) {
            return (
              <>
                <StPinList key={pin.id}>
                  <StPinImage src={pin.pin_img} alt="pin"/>
                </StPinList>
                <StViewMoreIconWrapper>
                  <StViewMoreIcon />
                </StViewMoreIconWrapper>
              </>
            );
          }
        })}
      </StPinLists>
      <StPinLists>
        {pinList.map((pin) => {
          if (pin.id >= pinList.length / 2) {
            return (
              <>
                <StPinList key={pin.id}>
                  <StPinImage src={pin.pin_img} />
                </StPinList>
                <StViewMoreIconWrapper>
                  <StViewMoreIcon />
                </StViewMoreIconWrapper>
              </>
            );
          }
        })}
      </StPinLists>
    </StPinWrapper>
  );
}

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StPinWrapper = styled.article`
  display: flex;
  gap: 8px;
`;
const StPinLists = styled(FlexColumnWrapper)`
  width: 174px;
`;
const StPinList = styled(FlexColumnWrapper)`
  width: inherit;
  height: fit-content;
  border: none;
  border-radius: 17px;
  overflow: hidden;
`;
const StPinImage = styled.img`
  object-fit: cover;
`;
const StViewMoreIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
