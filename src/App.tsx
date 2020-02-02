import { Component, Vue, Emit } from 'vue-property-decorator';
import Calculator from '@/components/Calculator';

import './App.css'

@Component
export default class App extends Vue {


  render() {
    return (
      <Calculator></Calculator>
    )
  }
}
