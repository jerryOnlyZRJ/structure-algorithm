/**
 * 快速排序
 * @param {Array} arr 
 */
function quick(arr){
    const len = arr.length
    if(len === 0){
        return []
    }
    const pivot = arr[0]
    let lesser = []
    let greater = []
    for(let i = 1;i < len; i++){
        if(arr[i] < pivot){
            lesser.push(arr[i])
        }else {
            greater.push(arr[i])
        }
    }
    return quick(lesser).concat(pivot, quick(greater))
}