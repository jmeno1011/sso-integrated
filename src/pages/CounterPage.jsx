import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';

const CounterPage = () => {
    // redux의 state괄리는 도와줌
    const {number} = useSelector(state=> state.counter.number);
    // = store.dispatch() : index.js의 Provider에서 넘겨준 store에서 dispatch()를 가져오는데 대신 사용할 수 있음
    const dispatch = useDispatch(); 
    const onIncrease = ()=>{
      dispatch(increase());
    }
    const onDecrease = ()=>{
        dispatch(decrease());
    }
  return (
    <div className='counter-page'>
        <h1>{number}</h1>
        <div>
            <button onClick={onIncrease}>plus +1</button>
            <button onClick={onDecrease}>minus -1</button>
        </div>
    </div>
  )
}

export default CounterPage