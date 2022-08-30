/**
 * 
 * Number() 함수와 parseInt() 함수의 차이
 * 
 * 차이점 
 * 1. Number()는 오로지 숫자 타입의 문자열만 Number 타입으로 변환합니다.
    Number('1') : 1
    Number('1st') : NaN
    Number('No1') : NaN
    Number('No1A') : NaN

    parseInt('1') : 1
    parseInt('1st') : 1
    parseInt('No1') : NaN
    parseInt('No1A') : NaN

    2. Number()는 소수점을 표시할 수 있습니다.
    Number('1.9') : 1.9
    parseInt('1.9') : 1

    3. parseInt()는 2번째 파라미터를 이용하여, 문자열을 2진법, 16진법 숫자를 10진법으로 변환할 수 있습니다.
    Number('11') : 11
    parseInt('11') : 11
    parseInt('11', 2) : 3 -> 2진법으로
    parseInt('11', 16) : 17 -> 16진법으로

    4. null, boolean, empty string 등의 처리에 차이가 있습니다.
    Number() : 0
    Number(true) : 1
    Number(null) : 0
    Number('') : 0

    parseInt() : NaN
    parseInt(true) : NaN
    parseInt(null) : NaN
    parseInt('') : NaN
    
 */