const solution = (a,b) => {
    let c = a.sort();
    let d = b.sort();
    for(let i=0; i<c.length; i++) {
        if(c[i] !== d[i]) {
            return c[i]
        }
    }
};

const solution2 = (pc,cp) => {
    let List = pc.concat(cp);
    let answer = List.reduce((a,c,i) => {
        a[c] = (a[c]) ? a[c] + 1 : 1
        return a
    },{});
    
    for (const k in answer) {
        if(answer[k]%2 != 0) {
            return k
        }
    }
}