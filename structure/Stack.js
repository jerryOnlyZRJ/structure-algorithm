/**
 * 栈
 */
class Stack {
    constructor(){
        this.dataStore = []
        this.top = 0
    }
    push(element){
        this.dataStore.push(element)
        this.top++
    }
    pop(){
        this.top--
        return this.dataStore.pop()
    }
    clear(){
        this.dataStore = []
        this.top = 0
    }
    getStack(){
        return this.dataStore
    }
    getPeek(){
        return this.dataStore[this.top - 1]
    }
    getStackLength(){
        return this.dataStore.length
    }
    /**
     * 回文算法(判断数组反转后是否与原来相等)
     * @return {Boolean} 
     */
    isPalindrome(){
        const mirror = this.dataStore.reverse()
        let result = true
        mirror.map((item, index) => {
            if(item !== this.dataStore[index]){
                result = false
            }
        })
        return result
    }
}