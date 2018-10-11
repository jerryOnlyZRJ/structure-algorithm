/**
 * 选择排序
 * @param {Array} arr 
 */
function select(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(i != min) {
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}