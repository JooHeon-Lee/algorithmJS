const solution = (array, commands) => {
    let answer = [];
    let arr = commands.reduce((a,c,i) => {
        if(c[0] == c[1]) {     
           a[i] = [array[c[0]-1]];   
        }else {
                
           a[i] = array.slice(c[0]-1,c[1]);
        }
    return a
    },[]);
    let te = arr.reduce((a,c,i) => {
        c.sort((a,b) => {
            return a-b
        });

        answer.push(c[commands[i][2]-1]);
        return a
    },[]);

    return answer;
}