import { Mutation, State, Getter } from 'vuex-simple';

export class Calculation {
  @State() public buffer: string;
  @State() public result: number;

  constructor(st: string = '', nb: number = 0) {
    this.buffer = st;
    this.result = nb;
  }

  @Mutation() public addBuffer(st: string) {
    this.buffer += st;
  }
  @Mutation() public setBuffer(st: string) {
    this.buffer = st;
  }
  @Mutation() public setResult(nb: number) {
    this.result = nb;
  }
  @Mutation() public clearState() {
    this.buffer = '';
    this.result = 0;
  }

  @Getter() public get getBuffer() {
    return this.buffer
  }

  @Getter() public get getResult() {
    return this.result
  }
}