let a = 30
a = String(a)
a = a.split('')
console.log(a.reverse().join(''))


const solution = (x) => {
    if(x < 0) return false

    let v1 = String(x).split('').reverse().join('')

    return v1 === String(x)
}

solution(121)