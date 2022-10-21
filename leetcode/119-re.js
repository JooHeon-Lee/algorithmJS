/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let row = [];

row.push(1); // [1]

for (let i = 1; i <= rowIndex; i++) {
    
    // 이전 row의 길이보다 1 작은 숫자 만큼 for문을 돈다. 맨 마지막은 1임.
    for (let j = row.length - 1; j > 0; j--) {
        row[j] = row[j - 1] + row[j];
    }
    // 맨 마지막은 직접 넣어준다. i = 1인 경우 j for문은 타지 않음. 
    row.push(1);
}

return row;
};