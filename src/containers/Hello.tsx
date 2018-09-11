import Hello from '../component/Hello';
import * as actions from '../actions';
import { IstoreState } from '../types/index';
import { connect, DispatchProp } from 'react-redux';

// // 将store中的数据改为组件需要的数据
// export function mapStateToProps ({ level, languageName }: IstoreState) {
//   return {
//     languageName,
//     level
//   }
// }
// // 
// export function mapDispatchToProps (dispatch: DispatchProp<actions.levelAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementLevel)
//   }
// }