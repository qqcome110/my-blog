<template>
  <div>
    <div class="form-group">
      <label for="">波色: </label>
      <select v-model="codeColor">
        <option v-for="color in colorCodes" :key="color.id" :value="color.id">{{ color.name }}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="">单双：</label>
      <span v-for="oe in oddEvens" :key="oe.id">
        <input type="radio" v-model="oddEvenNumber" :value="oe.id">
        {{ oe.name }}
      </span>
    </div>
    <div class="form-group">
      <label for="">生肖：</label>
      <span v-for="symbol in symbols" :key="symbol.id">
        <input type="checkbox" v-model="selectedSymbols" :value="symbol.id" />
        {{ symbol.name }}
      </span>
    </div>
    <div class="form-group">
      <label for="">结果：({{ results.length }}个)<button type="button" @click="reset">重置</button></label>
      <div class="result">
        <ul>
          <li v-for="r in results" :key="r.code" :class="{
              [`code-${getCodeColor(r.code)}`]: true,
              'code-layout': true
            }">
            <span>{{ r.code }}</span>
            <span>{{ r.symbol }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin gen () {
  $opcity: .9;
  $selector: code;
  $colors: blue green red;

  %base {
    color: #fff;
    width: 40px;
    height: 40px;  
    font-weight: 700;
    border-radius: 50%;
    padding: 5px;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @each $color in $colors {
    .#{$selector}-#{$color} {
      @extend %base;
      background-color: rgba($color, $opcity);
    }
  }
}

.result {
  margin-top: 10px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .code-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@include gen();
</style>


<script>
import { colorCodes, oddEven, symbols, ODD, sixCodeMap, symbolCodes } from '../config'

export default {
  name: 'CustomCode',
  data () {
    return {
      colorCodes: [{ id: 0, name: '请选择波色' }, ...colorCodes],
      codeColor: 0, // 0

      oddEvens: oddEven,
      oddEvenNumber: 1, // 1

      symbols,
      selectedSymbols: [] // []
    }
  },

  computed: {
    results () {
      return this.calcCode()
    }
  },

  methods: {
    calcCode () {
      // debugger
      const { codeColor, oddEvenNumber, selectedSymbols } = this

      // 波色码
      const resultColorCodes = colorCodes.filter(c => c.id === codeColor)
      // 单?
      const isOdd = oddEvenNumber === ODD
      // 生肖号码
      const resultCodes = selectedSymbols.reduce((arr, symbol) => {
        const _symbol = symbols.find(s => s.id === symbol)
        const symbolName = _symbol ? _symbol.name : ''
        const codes = symbolName ? sixCodeMap[symbolName] : []
        
        return [
          ...arr,
          ...codes
        ]
      }, [])

      // 过滤波色
      const filterColorCodes = resultCodes.filter(rc => resultColorCodes.find(rcc => rcc.codes.includes(rc)))
      // 过滤单双数
      const filterOddEvenCodes = filterColorCodes.filter(fcc => {
        const remain = isOdd ? 1 : 0
        return +fcc % 2 === remain
      })
      // 填充生肖
      const codeMapSymbol = filterOddEvenCodes.map(c => symbolCodes.find(sc => sc.code === c))

      return codeMapSymbol
    },

    getCodeColor (code) {
      const matched = colorCodes.find(cc => cc.codes.includes(code))

      return matched ? matched.color : ''
    },

    reset () {
      this.codeColor = 0
      this.oddEvenNumber = 1
      this.selectedSymbols = []
    }
  }
}
</script>
