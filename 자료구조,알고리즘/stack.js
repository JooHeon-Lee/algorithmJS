/**
 * LIFO ( LAST IN LAST OUT )
 * 값 추가 - push
 * 값 제거 - pop
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
 * EX) 1. Browser Back button
 *     2. DFS ( DEPTH FIRST SEARCH )
 * 
 */


var Stack = function()
{
    this.arr = [];

    this.push = function(value)
    {
        this.arr.push(value);

    };

    this.pop = function()
    {
        if(this.size() < 1)
        {
            return;
        }
        
        return this.arr.pop();
    };

    this.size = function() 
    {
        return this.arr.length;
    };

    return this;
}

let stack = new Stack();

stack.push(1);
stack.push(1);
stack.push(1);
stack.pop();
console.log(stack.arr);



