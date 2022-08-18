// 액션 타입 정의 / 타입 구분 명확히 하기위해 명시화
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// reducer : view에서 액션을 발생시켜 이전 상태와 액션을 받아 변화된 상태를 반환하는 순수 함수
const initialState = {
  number: 0,
};
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;