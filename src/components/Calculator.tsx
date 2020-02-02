import { Component } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import { useStore } from 'vuex-simple';
import { CalcStore } from '@/store/store';

import { Sign } from '@/types/sign';
import { Num } from '@/types/num';

import styles from './Calculator.css?module'

@Component
export default class Calculator extends VueComponent  {
  
  buffer: string = '';
  result: number = 0;

  signs: Sign[] = [
      Sign["C"],
      Sign["-"],
      Sign["+"],
      Sign["="],
    ]
  nums: Num[] = [
      Num["Seven"], Num["Eight"], Num["Nine"],
      Num["Four"], Num["Five"], Num["Six"],
      Num["One"], Num["Two"], Num["Three"],
      Num["Zero"],
    ]

  eventHandler(e:any): void {
    let calcKey: string = e.toElement.textContent;
    if (calcKey === Sign["="]) {
      
     this.calculation() 

    } else if (calcKey === Sign['C']) {
      this.buffer = '';
      this.result = 0;
      this.commitClearState()
    } else {
      this.buffer+=calcKey;
      this.commitAddBuffer(calcKey)
    }
  }

  async calculation() {
    await new Promise(r => setTimeout(r, 2000));
    this.result = +eval(this.buffer);
    this.buffer = '' + this.result
    this.commitSetBuffer(this.buffer)
    this.commitSetResult(this.result)
  }

  public store: CalcStore = useStore(this.$store);

  public commitSetResult(nb: number) {
    this.store.calculation.setResult(nb)
  }
  public commitSetBuffer(st: string) {
    this.store.calculation.setBuffer(st)
  }
  public commitAddBuffer(st: string) {
    this.store.calculation.addBuffer(st)
  }
  public commitClearState() {
    this.store.calculation.clearState()
  }

  render() {
    return (
      <div class={styles.wrapper}>
        <div class={styles.inner}>
          <div class={styles.line}>
            <span class={styles.row}>
            {this.buffer}
            </span>
          </div>
          <div class={styles.result}>
            <span>
            ={this.result}
            </span>
          </div>
        </div>
        <div class={styles.display}>
          <div class={styles.numbers}>
            {this.nums.map(num =>
              <span
                class={styles.num}
                onClick={this.eventHandler}
              >
                {num}
              </span>)
            }
          </div>
          <div class={styles.signs}>
            {this.signs.map(sign =>
              <span
                class={styles.sign}
                onClick={this.eventHandler}
              >
                {sign}
              </span>)
            }
          </div>
        </div>
      </div>
    )
  }
}
