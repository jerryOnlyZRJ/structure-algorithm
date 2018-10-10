/**
 * 二叉排序树节点
 */
class BstNode {
    constructor(data, leftNode, rightNode) {
        this.data = data
        this.leftNode = leftNode
        this.rightNode = rightNode
    }
}

/**
 * 二叉排序树
 */
class BST {
    constructor(dataArr) {
        this.root = null
        dataArr && dataArr.map(item => {
            this.insert(item)
        })
    }
    insert(data) {
        const newNode = new BstNode(data, null, null)
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root
            while (currentNode) {
                if (data < currentNode.data) {
                    if(currentNode.leftNode){
                        currentNode = currentNode.leftNode
                    }else {
                        currentNode.leftNode = newNode
                        break
                    }
                } else {
                    if(currentNode.rightNode){
                        currentNode = currentNode.rightNode
                    }else {
                        currentNode.rightNode = newNode
                        break
                    }
                }
            }
        }
    }
    /**
     * 前序遍历
     * @param {BstNode} node 
     * @returns {Array}
     */
    DLR(node = this.root) {
        let result = []
        if (node) {
            result.push(node.data)
            this.DLR(node.leftNode)
            this.DLR(node.rightNode)
        }
        return result
    }
    /**
     * 中序遍历
     * 对于二叉排序树而言，中序遍历就是排序算法
     * @param {BstNode} node 
     * @returns {Array}
     */
    LDR(node = this.root) {
        let result = []
        if (node) {
            this.LDR(node.leftNode)
            result.push(node.data)
            this.LDR(node.rightNode)
        }
        return result
    }
    /**
     * 后序遍历
     * @param {BstNode} node 
     * @returns {Array}
     */
    LRD(node = this.root) {
        let result = []
        if (node) {
            this.LRD(node.leftNode)
            this.LRD(node.rightNode)
            result.push(node.data)
        }
        return result
    }
    findMin(){
        let currentNode = this.root
        while(currentNode.leftNode){
            currentNode = currentNode.leftNode
        }
        return currentNode.data
    }
    findMax(){
        let currentNode = this.root
        while(currentNode.rightNode){
            currentNode = currentNode.rightNode
        }
        return currentNode.data
    }
}