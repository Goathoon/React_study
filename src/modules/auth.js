import {createAction,handleActions} from 'redux-actions';
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION'; //auth 모듈 안에 SAMPLE_ACTION이라는 액션타입이 존재한다.(관습적인 룰)
export const sampleAction = createAction(SAMPLE_ACTION);
const initialState = {};

const auth = handleActions(
    {
        [SAMPLE_ACTION]:(state,action)=>state,
    },
    initialState,
);

export default auth;