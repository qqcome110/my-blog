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
      <label for="">
        <el-select class="stratTail" v-model="stratTail" placeholder="请选择">
          <el-option label="准一尾" value="correct"></el-option>
          <el-option label="杀一尾" value="disCorrect"></el-option>
        </el-select>
        :
      </label>
      <el-select v-model="numTails" multiple placeholder="请选择">
        <el-option
          v-for="n in singleNums"
          :key="n"
          :label="n"
          :value="n">
        </el-option>
      </el-select>
    </div>
    <div class="form-group mt10">
      <label for="">
        <el-select class="stratTail" v-model="stratHead" placeholder="请选择">
          <el-option label="准一头" value="correct"></el-option>
          <el-option label="杀一头" value="disCorrect"></el-option>
        </el-select>
        :
      </label>
      <el-select v-model="numHeads" multiple placeholder="请选择">
        <el-option
          v-for="(n, i) in 5"
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
        <el-badge :value="`${results.length}个`" class="result-tag">
          <el-button size="small" @click="save">存储</el-button>
        </el-badge>
      </div>
      <code-list :codes="results"></code-list>
    </div>
  </div>
</template>

<script>
import { colorCodes, oddEven, symbols, ODD, IGNORE, sixCodeMap, symbolCodes, EVEN } from '../config'
import Store from '../store'
import CodeList from '@/components/CodeList'

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
      stratTail: 'correct',
      numTails: [],
      // 一头
      stratHead: 'correct',
      numHeads: []
    }
  },

  components: {
    CodeList,
  },

  computed: {
    results () {
      return this.calcCode()
    },

    hasResults () {
      return this.results && this.results.length
    },

    isIndeterminate () {
      const { selectedColorCodes, colorCodes } = this

      return selectedColorCodes ? selectedColorCodes.length > 0 && selectedColorCodes.length !== colorCodes.length : false
    },

    isSymbolIndeterminate () {
      const { selectedSymbols, symbols } = this

      return selectedSymbols ? selectedSymbols.length > 0 && selectedSymbols.length !== symbols.length : false
    },

    singleNums () {
      const nums = Array.from({ length: 10 }, (_, index) => index)

      switch (this.oddEvenNumber) {
        case ODD:
          return nums.filter(n => n % 2 !== 0)
          break
        case EVEN:
          return nums.filter(n => n % 2 === 0)
          break
        case IGNORE:
          return nums
          break
      }
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

    save () {
      if (this.hasResults) {
        Store.commit('setCodes', this.results)
        // this.$message({
        //   message: '存储成功！请查看Store',
        //   type: 'success',
        //   showClose: true
        // });
      }
    },

    calcCode () {
      const { selectedColorCodes, oddEvenNumber, selectedSymbols, numTails, numHeads} = this

      // 波色码
      const resultColorCodes = colorCodes.filter(c => selectedColorCodes.includes(c.id))
      // 单?
      const isOdd = oddEvenNumber === ODD
      // 不限单双
      const isIgnore = oddEvenNumber === IGNORE
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
      const filterOddEvenCodes = isIgnore ? filterColorCodes : filterColorCodes.filter(fcc => {
        const remain = isOdd ? 1 : 0
        return +fcc % 2 === remain
      })
      // 准一尾 / 杀一尾
      const stratTailFnMap = {
        correct: (n) => {
          const [, tailNum] = n.split('')
          return numTails && numTails.length ? numTails.includes(+tailNum) : true
        },
        disCorrect: (n) => {
          const [, tailNum] = n.split('')
          return numTails && numTails.length ? !numTails.includes(+tailNum) : true
        }
      }
      const filterTailCodes = filterOddEvenCodes.filter(stratTailFnMap[this.stratTail])
      // 杀一头
      const startHeadFnMap = {
        correct: (n) => {
          const [headNum, ] = n.split('')
          return numHeads && numHeads.length ? numHeads.includes(+headNum) : true
        },
        disCorrect: (n) => {
          const [headNum, ] = n.split('')
          return numHeads && numHeads.length ? !numHeads.includes(+headNum) : true
        }
      }
      const filterHeadCodes = filterTailCodes.filter(startHeadFnMap[this.stratHead])
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

<style lang="scss" scoped>
.mt10 {
  margin-top: 10px;
}

.result-tag {
  & + & {
    margin-left: 30px;
  }
}

.inline-group {
  display: inline-block;
}

.stratTail {
  display: inline-block;
  width: 100px;
}

.result-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>