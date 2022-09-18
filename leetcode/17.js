/**
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */

const solution = (str) => {
    let result = []
    if(isNaN(Number(str[0])) || Number(str[0]) < 2 || Number(str[0]) > 9 || str.length == 0 ) return []
    const map = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz'
    }
    if(str.length === 1){
        const result = map[str].split('').reduce((ac,v,i) => {
            ac[i] = v
            return ac
        },[])
        return result
    }else {
        for(let i=0; i< map[str].length; i++) {
            
        }
}




console.log(solution(''))