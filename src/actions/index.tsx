import * as constants from '../constants/index';

// declare interface
console.log(constants);
export interface Iincrement {
  type: constants.INCREMENT_LEVEL;
}

export interface Idecrement {
  type: constants.DECREMENT_LEVEL;
}

// 用于描述是increment action还是减少decrement action
export type levelAction = Iincrement | Idecrement;

// 产出action
export function incrementLevel () : Iincrement {
  return {
    type: constants.INCREMENT_LEVEL
  }
}

export function decrementLevel () : Idecrement {
  return {
    type: constants.DECREMENT_LEVEL
  }
}

