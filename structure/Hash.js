/**
 * Hash表
 */
class Hash {
    constructor() {
        this.dataStore = []
    }
    getHashIndex(data) {
        let total = 0
        const len = data.length
        for (let i = 0; i < len; i++) {
            total += data.charCodeAt(i)
        }
        return total % (this.dataStore.length || 1)
    }
    /**
     * 插入数据
     * @param {String} data  数据
     */
    add(data){
        const index = this.getHashIndex(data)
        //线性探测法  追溯空位并插入值
        while(!this.dataStore[index]){
            this.dataStore[index] = data
        }
    }
    getHash(data){
        const hashIndex = this.getHashIndex(data)
        const len = this.dataStore.length
        for(let i = hashIndex; i < len; i++){
            if(this.dataStore[i] === data){
                return i
            }
        }
    }
    display(){
        this.dataStore.map((item, index) => {
            if(item){
                console.log(`Hash: ${index} -> Value: ${item}`)
            }
        })
    }
}