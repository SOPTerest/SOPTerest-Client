import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcBack } from '../assets/icons';
import BoardFormToast from '../components/BoardFormToast';
import { COLOR } from '../styles/color';
import { FONT_STYLES } from '../styles/fonts/font';

export default function BoardForm() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isToast, setIsToast] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (isToast) {
      setTimeout(() => setIsToast(false), 1000);
    }
  }, [isToast]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      setIsToast(true);
      return;
    }
    setIsActive(e.target.value.length > 0);
    setTitle(e.target.value);
  };

  const goBoard = () => {
    if (title.length > 0) navigate(`/board/id들어갈곳`);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <StWrapper>
      <StHeaderWrapper>
        <StIcBack onClick={goBack} />
        <StHeaderTitle>보드 만들기</StHeaderTitle>
        <StCreateButton isActive={isActive} onClick={goBoard}>
          만들기
        </StCreateButton>
      </StHeaderWrapper>
      <StFormWrapper>
        <StFormTitle>보드 이름</StFormTitle>
        <StInput type="text" placeholder="추가" onChange={handleChangeInput} value={title} />
      </StFormWrapper>
      {isToast && <BoardFormToast />}
    </StWrapper>
  );
}

const StWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StHeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

const StHeaderTitle = styled.b`
  ${FONT_STYLES.B1_BOLD}
`;

const StCreateButton = styled.button<{ isActive: boolean }>`
  width: 64px;
  height: 32px;
  position: absolute;
  top: 23px;
  right: 10px;
  border-radius: 16px;
  background-color: ${(props) => (props.isActive ? `${COLOR.RED}` : `${COLOR.GRAY_200}`)};
  color: ${(props) => (props.isActive ? `${COLOR.WHITE}` : `${COLOR.GRAY_100}`)};
  border: 0;
  outline: 0;
  &:hover {
    cursor: pointer;
  }
`;

const StFormWrapper = styled.div`
  width: calc(100% - 20px);
  height: 85px;
  border-top: 1px solid ${COLOR.GRAY_200};
  border-bottom: 1px solid ${COLOR.GRAY_200};
  padding: 11px 14px;
  box-sizing: border-box;
`;

const StFormTitle = styled.b`
  ${FONT_STYLES.B3_REGULAR}
`;

const StInput = styled.input`
  width: 100%;
  height: 49px;
  border: 0;
  outline: 0;
  padding-left: 11px;
  ${FONT_STYLES.H3_BOLD}
  &::placeholder {
    color: ${COLOR.GRAY_200};
  }
`;

const StIcBack = styled(IcBack)`
  position: absolute;
  top: 23px;
  left: 10px;
`;
