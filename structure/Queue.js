/**
 * 队列
 */
class Queue {
    constructor(){
        this.dataStore = []
    }
    enqueue(element){
        this.dataStore.push(element)
        return this.dataStore
    }
    dequeue(){
        return this.dataStore.shift()
    }
    getQueue(){
        return this.dataStore
    }
}

/**
 * 优先队列
 * 队列里每个元素都需要带有priority(权重)属性
 */
class priorityQueue extends Queue {
    constructor(){
        super()
    }
    dequeue(){
        let priority = 0
        let result = null
        this.dataStore.map(item => {
            if(item.priority > priority){
                result = item
            }
        })
        return result
    }
}