/**
 * 无权重树
 */
class Graph {
    constructor(vertices) {
        this.vertices = vertices
        this.edges = 0
        this.adjacency = []
        this.queue = []
        this.edgeTo = []
        this.marked = new Set()
        for (let i = 0; i < vertices; i++) {
            this.adjacency[i] = []
        }
    }
    addEdge(a, b) {
        this.adjacency[a].push(b)
        this.adjacency[b].push(a)
        this.edges++
    }
    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            if (this.adjacency[i].toString()) {
                console.log(i, "->", ...this.adjacency[i])
            } else {
                console.log(i)
            }
        }
    }
    /**
     * 深度优先遍历
     * @param {Number} start 遍历开始顶点
     */
    deepFirstSearch(start) {
        this.marked.add(start)
        console.log(`${start}已经被访问。`)
        for (let next of this.adjacency[start]) {
            if (!this.marked.has(next)) {
                this.deepFirstSearch(next)
            }
        }
    }
    /**
     * 广度优先遍历
     * @param {Number} start 遍历开始定点
     */
    breadthFirstSearch(start) {
        let queue = []
        this.marked.add(start)
        queue.push(start)
        while (queue.length > 0) {
            let ele = queue.shift()
            console.log(`${ele}已经被访问。`)
            for (let item of this.adjacency(ele)) {
                if (!this.marked.has(item)) {
                    this.marked.add(item)
                    this.edgeTo[item] = ele
                    queue.push(item)
                }
            }
        }
    }
    /**
     * 判断是否有到达end点的路径
     * @param {Number} end 结束点 
     */
    hasPathTo(end) {
        return this.marked.has(end)
    }
    /**
     * 计算两点之间的最短路径
     * @param {Number} start 
     * @param {Number} end 
     */
    pathTo(start, end) {
        let path = []
        if (!this.hasPathTo(end)) {
            for (i = end; i != start; i = this.edgeTo(i)) {
                path.push(i)
            }
            path.push(start)
            console.log("最短路径为：", path.join("->"))
        } else {
            return null
        }
    }
}