export interface Code {
  code: string
  symbol: string
}

export function mergeArray (arr1: any, arr2: Code) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return []
  }
  
  return arr2.reduce((arr, item: Code) => {
    const finded = arr1.find((compItem: any) => compItem.code === item.code)
    
    if (!finded) {
      arr.push(item)
    }
    
    return arr
  }, arr1)
}