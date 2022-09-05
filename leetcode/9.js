let a = 30
a = String(a)
a = a.split('')
console.log(a.reverse().join(''))


const solution = (x) => {
    if(x < 0) return false

    let v1 = String(x).split('').reverse().join('')

    if(v1 == String(x)) {
        return true
    }else {
        return false
    }

}

solution(121)