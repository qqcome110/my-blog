export const sixCodeMap = {
  '鼠': ['11', '23', '35', '47'],
  '牛': ['10', '22', '34', '46'],
  '虎': ['09', '21', '33', '45'],
  '兔': ['08', '20', '32', '44'],
  '龙': ['07', '19', '31', '43'],
  '蛇': ['06', '18', '30', '42'],
  '马': ['05', '17', '29', '41'],
  '羊': ['04', '16', '28', '40'],
  '猴': ['03', '15', '27', '39'],
  '鸡': ['02', '14', '26', '38'],
  '狗': ['01', '13', '25', '37', '49'],
  '猪': ['12', '24', '36', '48']
}

export const sixSymbols = ['', ...Object.keys(sixCodeMap)].map(item => ({ label: item || '请选择生肖', value: item }))
export const symbols = Object.keys(sixCodeMap).map((s, i) => ({ id: i+1, name: s }))
export const symbolCodes = Object.keys(sixCodeMap).reduce((arr, symbol) => {
  const codes = sixCodeMap[symbol].map(c => ({ code: c, symbol }))
  
  return [
    ...arr,
    ...codes
  ]
}, [])

export const greenCodes = [
  '05',
  '06',
  '11',
  '16',
  '17',
  '21',
  '22',
  '27',
  '28',
  '32',
  '33',
  '38',
  '39',
  '43',
  '44',
  '49'
]

export const blueCodes = [
  '03',
  '04',
  '09',
  '10',
  '14',
  '15',
  '20',
  '25',
  '26',
  '31',
  '36',
  '37',
  '41',
  '42',
  '47',
  '48'
]

export const redCodes = [
  '01',
  '02',
  '07',
  '08',
  '12',
  '13',
  '18',
  '19',
  '23',
  '24',
  '29',
  '30',
  '34',
  '35',
  '40',
  '45',
  '46'
]

export const colorCodes = [
  { id: 1, codes: redCodes, name: '红波', color: 'red' },
  { id: 2, codes: blueCodes, name: '蓝波', color: 'blue' },
  { id: 3, codes: greenCodes, name: '绿波', color: 'green' }
]

export const ODD = 1
export const EVEN = 2

export const oddEven = [
  { id: ODD, name: '单数' },
  { id: EVEN, name: '双数' }
]
// 两合
// export const twiceProp = {
//   '1': 
// }