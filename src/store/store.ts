import { Module, State } from 'vuex-simple';
import { Calculation } from './modules/calculation';
 
export class CalcStore {
 
  @Module()
  public calculation = new Calculation();
 
}
 