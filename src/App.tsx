import { Component, Vue } from "vue-property-decorator";
import Calculator from "@/components/Calculator";

import { useStore } from "vuex-simple";
import { CalcStore } from "@/store/store";
import { Sign } from "@/types/sign";

import "./App.css";

@Component
export default class App extends Vue {
  
  eventHandler(e: any): void {
    let calcKey: string = e.target.innerText;
    if (calcKey === Sign["="]) {
      this.calculation();
    } else if (calcKey === Sign["C"]) {
      this.commitClearState();
    } else {
      this.commitAddBuffer(calcKey);
    }
  }

  async calculation() {
    await new Promise(r => setTimeout(r, 2000));
    this.commitSetResult(+eval(this.readBuffer));
    this.commitSetBuffer(this.readResult.toString());
  }

  public store: CalcStore = useStore(this.$store);

  public get readBuffer(): string {
    return this.store.calculation.getBuffer;
  }
  public get readResult(): number {
    return this.store.calculation.getResult;
  }

  public commitSetResult(nb: number) {
    this.store.calculation.setResult(nb);
  }
  public commitSetBuffer(st: string) {
    this.store.calculation.setBuffer(st);
  }
  public commitAddBuffer(st: string) {
    this.store.calculation.addBuffer(st);
  }
  public commitClearState(): void {
    this.store.calculation.clearState();
  }

  render() {
    return (
      <Calculator
        buffer={this.readBuffer}
        result={this.readResult}
        handler={this.eventHandler}
      ></Calculator>
    );
  }
}
