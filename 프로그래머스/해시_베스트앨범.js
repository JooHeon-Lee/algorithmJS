const solution = (tp,song) => {
    const songs = tp.reduce((a,c,i) => {
        if(!a[c]) {
            a[c] = {
                total : 0,
                list : [],
            };
        }
        a[c].total += song[i];
        a[c].list.push([i,song[i]]);
        
        return a;
    },{});
    
    const sortList = Object.values(songs).sort(
    (a,b) => {
        return b.total - a.total;
    },
    );
    
    const answer = sortList.reduce((a,c) => {
        c.list.sort((a,b) => {
            return b[1] - a[1];
        });
        
        a.push(c.list[0][0]);
        
        if(c.list.length > 1 ) {
            a.push(c.list[1][0]);
        }
        
        return a;
    },[]);
    return answer;
}