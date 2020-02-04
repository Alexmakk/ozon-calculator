import { Component, Prop, Emit } from 'vue-property-decorator';
import { VueComponent } from '../shims-vue';
import { Sign } from '@/types/sign';
import { Num } from '@/types/num';

import styles from './Calculator.css?module'

interface Props {
  buffer: string
  result: number
  handler: (e: Event) => void
}
@Component
export default class Calculator extends VueComponent<Props>  {
  
  @Prop() buffer!: string
  @Prop() result!: number
  @Prop() handler!: (e: Event) => void

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
                onClick={this.handler}
              >
                {num}
              </span>)
            }
          </div>
          <div class={styles.signs}>
            {this.signs.map(sign =>
              <span
                class={styles.sign}
                onClick={this.handler}
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
