import { levelAction } from '../actions/index';
import { IstoreState } from '../types/index';
import { DECREMENT_LEVEL, INCREMENT_LEVEL } from '../constants/index';


export function levelReducer(state: IstoreState, action: levelAction): IstoreState {
  switch (action.type) {
    // 所有action都返回新的state  这个state必须是一个新的对象
    // 不能对原有的state产生 side-effect
    case INCREMENT_LEVEL:
      // 配合展开操作符生成一个新的浅拷贝的state对象 
      return { ...state, level: state.level + 1 }
    case DECREMENT_LEVEL:
      return { ...state, level: state.level + 1 }
    default:
      return state;
  }
}