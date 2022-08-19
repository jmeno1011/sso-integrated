// ******************************************************** //
// counter.js에 redux-actions 라이브러리를 사용하여 변경된 코드입니다.
// ******************************************************** //

import { createAction, handleAction } from "redux-actions";

// 액션 타입 정의
const INCREASE = "counterAction/INCREASE";
const DECREASE = "counterAction/DECREASE";

// 액션 생성 함수
export const increase = createAction(INCREASE); // = export const increase = () => ({ type: INCREASE });
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counterAction = handleAction(
  {
    [INCREASE]: (state, action) => ({...state, number: state.number + 1 }),
    // 아래와 같은 코드
    // switch (action.type) {
    //   case INCREASE:
    //     return {
    //       ...state,
    //       number: state.number + 1,
    //     };
    [DECREASE]: (state, action) => ({...state, number: state.number - 1 }),
  },
  initialState
);

export default counterAction;
