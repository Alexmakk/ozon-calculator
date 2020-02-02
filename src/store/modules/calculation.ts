import { Mutation, State, Getter } from 'vuex-simple';
 
export class Calculation {
  @State()
  public buffer: string;
  public result: number;
 
  constructor(st: string = '', nb: number = 0) {
    this.buffer = st;
    this.result = nb;
  }
 
  @Mutation()
  public addBuffer(st: string) {
    this.buffer+=st;
  }
  public setBuffer(st: string) {
    this.buffer=st;
  }
  public setResult(nb: number) {
    this.result = nb;
  }
  public clearState() {
    this.buffer = '';
    this.result = 0;
  }

  @Getter()
  public get getBuffer() {
    return this.buffer
  }
  public get getResult() {
    return this.result
  }
}