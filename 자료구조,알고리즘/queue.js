/**
 * FIFO ( FIRST IN FIRST OUT )
 * 값 추가 - ENQUEUE
 * 값 제거 - DEQUEUE
 * 
 * Big O
 * 
 * Insertion
 * O(1)
 * 
 * Deletion
 * O(1)
 * 
 * Search
 * O(n)
 * 
 * EX) 1. PRINTER JOB QUEUE
 *     2. BFS ( BREATH FIRST SEARCH )
 */

var QUEUE = function()
{
    this.arr = [];

    this.enqueue = function(value)
    {
        this.arr.push(value);
    };

    this.dequeue = function()
    {
        if(this.size < 1)
        {
            return;
        }
        return this.arr.shift();
    };

    this.size = function()
    {
        return this.arr.length;
    };
}

let queue = new QUEUE();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log(queue.arr);

