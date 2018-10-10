/**
 * 冒泡排序
 * @param {Array} arr 
 */
function bubble(arr) {
    const len = arr.length
    for (i = 1; i < len; i++) {
        for (j = len - 1; j >= i; j--) {
            if (arr[j] > arr[j + 1]) {
                const t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
            }
        }
    }
    return arr
}