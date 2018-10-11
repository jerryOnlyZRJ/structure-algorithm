/**
 * 插入排序算法
 * @param {Array} arr 
 */
function insert(arr) {
    let dataStore = [arr[0]]
    const len = arr.length
    for (let i = 1; i < len; i++) {
        const dataStoreLength = dataStore.length
        for (let j = 0; j < dataStoreLength; j++) {
            if (dataStore[j] > arr[i]) {
                dataStore.splice(j, 0, arr[i])
                break;
            }
        }
        if(dataStore.length === dataStoreLength){
            dataStore.push(arr[i])
        }
    }
    return dataStore
}