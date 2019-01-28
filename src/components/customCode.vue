<template>
  <div>
    <div class="form-group">
      <label for="">波色: </label>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-checkbox-group class="inline-group" v-model="selectedColorCodes" @change="handleCheckedColorChange">
        <el-checkbox v-for="color in colorCodes" :label="color.id" :key="color.id">{{color.name}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="form-group">
      <label for="">单双：</label>
      <el-radio-group v-model="oddEvenNumber">
        <el-radio v-for="oe in oddEvens" :label="oe.id" :key="oe.id">{{ oe.name }}</el-radio>
      </el-radio-group>
    </div>
    <div class="form-group">
      <label for="">生肖：</label>
      <el-checkbox :indeterminate="isSymbolIndeterminate" v-model="checkSymbolAll" @change="handleCheckSymbolAllChange">全选</el-checkbox>
      <el-checkbox-group class="inline-group" v-model="selectedSymbols" @change="handleCheckedSymbolChange">
        <el-checkbox v-for="symbol in symbols" :label="symbol.id" :key="symbol.id">{{symbol.name}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="form-group mt10">
      <label for="">准一尾：</label>
      <el-select v-model="numTails" multiple placeholder="请选择">
        <el-option
          v-for="(n, i) in 10"
          :key="i"
          :label="i"
          :value="i">
        </el-option>
      </el-select>
    </div>
    <div class="form-group mt10">
      <label for="">杀一头：</label>
      <el-select v-model="numHeads" multiple placeholder="请选择">
        <el-option
          v-for="(n, i) in 10"
          :key="i"
          :label="i"
          :value="i">
        </el-option>
      </el-select>
    </div>
    <div class="form-group">
      <div class="result-wrapper">
        <label for="">结果：</label>
        <el-badge :value="`${results.length}个`" class="result-tag">
          <el-button size="small" @click="reset">重置</el-button>
        </el-badge>
      </div>
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

.mt10 {
  margin-top: 10px;
}

.result {
  margin-top: 10px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-flow: row wrap;
    justify-content: space-evenly;

    li {
      margin-bottom: 10px;
    }
  }

  .code-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.inline-group {
  display: inline-block;
}

.result-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

@include gen();
</style>


<script>
import { colorCodes, oddEven, symbols, ODD, sixCodeMap, symbolCodes } from '../config'

export default {
  name: 'CustomCode',
  data () {
    return {
      colorCodes,
      selectedColorCodes: [],

      oddEvens: oddEven,
      oddEvenNumber: 1, // 1

      symbols,
      selectedSymbols: [], // [],

      // 波色 是否全选
      checkAll: false,
      // 生肖 是否全选
      checkSymbolAll: false,

      // 一尾
      numTails: [],
      // 一头
      numHeads: []
    }
  },

  computed: {
    results () {
      return this.calcCode()
    },

    isIndeterminate () {
      const { selectedColorCodes, colorCodes } = this

      return selectedColorCodes ? selectedColorCodes.length > 0 && selectedColorCodes.length !== colorCodes.length : false
    },

    isSymbolIndeterminate () {
      const { selectedSymbols, symbols } = this

      return selectedSymbols ? selectedSymbols.length > 0 && selectedSymbols.length !== symbols.length : false
    }
  },

  methods: {
    handleCheckAllChange (val) {
      this.selectedColorCodes = val ? this.colorCodes.map(c => c.id) : []
    },

    handleCheckedColorChange (val) {
      this.checkAll = val.length === this.colorCodes.length
    },

    handleCheckSymbolAllChange (val) {
      this.selectedSymbols = val ? this.symbols.map(c => c.id) : []
    },

    handleCheckedSymbolChange (val) {
      this.checkSymbolAll = val.length === this.symbols.length
    },

    calcCode () {
      const { selectedColorCodes, oddEvenNumber, selectedSymbols, numTails, numHeads} = this

      // 波色码
      const resultColorCodes = colorCodes.filter(c => selectedColorCodes.includes(c.id))
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
      // 准一尾
      const filterTailCodes = filterOddEvenCodes.filter(n => {
        const [, tailNum] = n.split('')
        return numTails && numTails.length ? numTails.includes(+tailNum) : true
      })
      // 杀一头
      const filterHeadCodes = filterTailCodes.filter(n => {
        const [headNum, ] = n.split('')
        return numHeads && numHeads.length ? !numHeads.includes(+headNum) : true
      })
      // 填充生肖
      const codeMapSymbol = filterHeadCodes.map(c => symbolCodes.find(sc => sc.code === c))

      return codeMapSymbol
    },

    getCodeColor (code) {
      const matched = colorCodes.find(cc => cc.codes.includes(code))

      return matched ? matched.color : ''
    },

    reset () {
      this.oddEvenNumber = 1
      this.selectedSymbols = []
      this.selectedColorCodes = []
      this.numTails = []
      this.numHeads = []
      this.checkAll = false
      this.checkSymbolAll = false
    }
  }
}
</script>
