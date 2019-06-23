export function mergeArray (arr1 = [], arr2 = []) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return []
  }
  
  return arr2.reduce((arr, item) => {
    const { code, symbol } = item
    const finded = arr1.find(compItem => compItem.code === code)
    
    if (!finded) {
      arr.push(item)
    }
    
    return arr
  }, arr1)
}