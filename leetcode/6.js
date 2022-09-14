/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let count = 0;
    let countUp = true;
    const groups = [];
    for(let i = 0; i < numRows; i++){
        groups.push([]);
    }
    s.split('').map(char => {
        groups[count].push(char);
        if(countUp){
            count++;
            if(count === numRows){
                count = numRows < 2 ? 0 : count-2;
                countUp = !countUp;
            }
        }else{
            count--;
            if(count === -1){
                count = numRows < 2 ? 0 : count+2;
                countUp = !countUp;
            }
        }
    })
    return groups.reduce((acc, cur) => {
        return acc + cur.join('');
    }, '');
};