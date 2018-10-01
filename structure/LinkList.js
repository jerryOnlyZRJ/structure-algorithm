/**
 * 链表节点
 */
class LinkNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

/**
 * 链表
 */
class LinkList {
    constructor() {
        this.head = new LinkNode("HEAD", null)
    }
    find(value) {
        let currentNode = this.head
        while (currentNode.value !== value) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(value, frontNodeValue) {
        const newNode = new LinkNode(value, null)
        const frontNode = this.find(frontNodeValue)
        newNode.next = frontNode.next
        frontNode.next = newNode
    }
    findPrevious(value) {
        let currentNode = this.head
        while (currentNode.next !== null && currentNode.next.value !== value) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    remove(value) {
        const preNode = this.findPrevious(value)
        const currentNode = this.find(value)
        if (preNode) {
            preNode.next = currentNode.next
            currentNode.next = null
        }
    }
    reverse() {
        if (this.head.next) {
            let previousNode = this.head
            let currentNode = this.head.next
            while (currentNode) {
                let tempNode = currentNode.next
                currentNode.next = previousNode
                previousNode = currentNode
                currentNode = tempNode
            }
            this.head.next = null
        }
    }
    display() {
        let currentNode = this.head
        while (currentNode.next !== null) {
            console.log(currentNode.next.value, '\n')
            currentNode = currentNode.next
        }
    }
}