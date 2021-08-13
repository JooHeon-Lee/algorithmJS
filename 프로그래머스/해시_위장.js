const solution = (clothes) => {
    let sum = 1;
    let arr = clothes.reduce((a,c) =>{
        a[c[1]] = a[c[1]] ? a[c[1]] + 1 : 1
        return a
    },{});

    for (let v in arr) {
        sum *= arr[v] +1
    }
    return sum-1;
}