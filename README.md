# SOPTerest-Client

## 브랜치 전략📚

git flow - branch

main

feat/#이슈번호

<br/>

## 기술스택⚙️

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>

## 커밋 컨벤션🚨

| 커밋명    | 용도                                                          |
| --------- | ------------------------------------------------------------- |
| design    | CSS 등 사용자 UI 디자인 변경                                  |
| feat      | 새로운 기능에 대한 커밋                                       |
| style     | 기능에 영향을 주지 않는 커밋, 코드 순서 등의 포맷에 관한 커밋 |
| build     | 빌드 관련 파일 수정에 대한 커밋                               |
| chore/doc | 그 외 자잘한 수정에 대한 커밋, 문서인 경우 doc 으로 작성      |
| fix       | 버그 수정에 대한 커밋                                         |
| refactor  | 코드 리팩토링에 대한 커밋                                     |

<br/>

## 코드 컨벤션🚨

1.  컴포넌트 선언 방식

    ```tsx
    export default function Temp() {
      return <div></div>;
    }
    ```

    - 컴포넌트 선언 시, **일반 함수** 사용

    - 컴포넌트 외, 함수들은 **화살표 함수**를 사용

2.  이벤트 핸들러 함수 네이밍

    - 한 컴포넌트 내에서, **기능을 대표하는 이름**으로 명명한다.

    - 애매한 경우에는 handle ~ 로 시작한다.

    - prop으로 함수를 전달하는 경우에는 onClick~ , onChange ~ 로 명명한다.

      ```tsx
      // 부모
      const openModal = () => {}
      <자식 onClickModalCancel={openModal}
      ```

3.  컴포넌트 이름

    - **searchButton** 식으로 명명한다. (btnSearch, buttonSearch, searchBtn ❌)

4.  스타일드 컴포넌트

    1.  props 전달할 때 사용하는 **인터페이스는 컴포넌트명 + Props**로 선언한다.

        ```tsx
        interface CommonInputProps {
        	width: string;
        	errorMsg: string;
        }

        function CommonInput(props: CommonInputProps) {
        	const { width, errorMsg } = props;
        	...
        }
        ```

            2. 배열 이름은 **__List**로 명명한다. (userList, groupList, userDataList 등)

    2.  ~~ Data❌ **~~info**✅
    3.  useState의 **set 함수**를 자식 컴포넌트에서 사용하고자 할 시, set 함수를 **prop으로 그대로 넘겨주지 않고 함수로 감싸서 보내주도록 한다.**
        - 이 함수를 prop으로 넘겨줄 때 prop이름은 이벤트 핸들러 처럼 onChange~, onClick~ 형식으로 명명한다.

5.  그 외

    - 스타일 관련 상수는 아래와 같이 작성하되, color.ts / button.ts 와 같이 파일을 나누어서 작성한다.

      ```tsx
      import { css } from 'styled-components';

      export const Z_INDEX = {
        closeUp: 0,
        camOn: 10,
        camOff: 20,
        nickname: 25,
        question: 30,
        cheers: 40,
        modal: 50,
        updownNum: 55,
        toast: 60,
      };

      export const FULL_WIDTH_BUTTON = css`
        width: 100%;
        height: 58px;
        border-radius: 14px;
        font-size: 16px;
      `;
      ```

    - asset => svg로 최대한 가져온다.

      ```tsx
      export { default as icPlus } from './ic_plus.svg';
      export { ReactComponent as IcPlus } from './ic_plus.svg';

      export { default as imgTeamProfile } from './img_team_profile.svg';
      export { ReactComponent as ImgTeamProfile } from './img_team_profile.svg';
      ```

    - 시멘틱 태그는 필요하면 유동적으로 사용한다.

    - 스타일드 컴포넌트와 일반 컴포넌트는 한 파일에 작성한다.

    - 폴더명은 소문자

    - 상수는 대문자와 \_ 로 단어 구분을 한다.

    - 가장 바깥의 스타일드 컴포넌트는 StWrapper로 명명한다.

    - Wrapper✅ Container Box

<br/>

## 역할분배🏃🏃

| 팀원   | 역할             |
| ------ | :--------------- |
| 남주영 | Board 페이지     |
| 이서영 | MyPage 페이지    |
| 이은아 | BoardForm 페이지 |
