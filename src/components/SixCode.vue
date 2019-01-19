<template>
  <div>
    <input placeholder="请输入序列号" v-model="seriesCode" />
    <button @click="handleCalc" type="button">生成</button>
    <div class="table-container" v-if="result && result.length">
      <select v-model="selectSymbol">
        <option v-for="(item, index) in items" :value="item.value" :key="index">{{ item.label }}</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>生肖</th>
            <th>特马</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in filterResult" :key="row.code">
            <td>{{ index + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.code }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .table-container {
    width: 100%;

    table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;

      thead {
        tr:first-child {
          background-color: green;

          th {
            color: #fff;
          }
        }
      }

      td, th {
        border: 1px solid #ccc;
      }
    }
  }
</style>

<script>
import { sixCodeMap, sixSymbols } from '../config'

export default {
  name: 'SixCode',
  data () {
    return {
      items: sixSymbols,
      seriesCode: '',
      result: '',
      selectSymbol: ''
    }
  },
  computed: {
    filterResult () {
      if (!this.result || !this.result.length) return []
      if (!this.selectSymbol) return this.result

      return this.result.filter(item => item.name === this.selectSymbol)
    }
  },
  methods: {
    getSymbol (code) {
      const sybs = Object.keys(sixCodeMap)
      const result = sybs.find(item => sixCodeMap[item].indexOf(code) > -1)

      return result
    },

    getSixCode (strNum) {
      const temp = []
      const arr = strNum.split('')
      
      for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          temp.push(`${arr[i]}${arr[j]}`)
        }
      }
      
      return temp
    },

    getCodeWithSymbol (arr) {
      const result = Object.values(sixCodeMap)

      return arr.map(item => {
        const _symbol = this.getSymbol(item)
        return {
          name: _symbol,
          code: item
        }
      })
    },

    handleCalc () {
      if (!this.seriesCode) {
        alert('请输入要转换的序列码')
        return
      }
      const codes = this.getSixCode(this.seriesCode)
      const filterCodes = codes.filter(code => code <= 49 && code > 0)
      const symbolCode = this.getCodeWithSymbol(filterCodes)
      this.result = symbolCode
    }
  }
}
</script>