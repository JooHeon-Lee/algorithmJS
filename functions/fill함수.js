/**
 *  배열을 같은 값으로 채우는 함수.
 * arr.fill(value[, start[, end]])
 *  fill() 함수는 
    배열의 start index부터 end index 전까지(end index는 미포함) value값으로 채워주는 함수입니다.
     
     파라미터 
    value
    배열에 채울 값을 지정합니다.
     
    start
    value 값을 채울 배열의 시작 index입니다.
    입력하지 않으면 기본값은 0입니다.
     
    end
    value 값을 채울 배열의 종료 index입니다.
    입력하지 않으면 기본값은 배열의 길이(arr.length)입니다.
     
     리턴값 
    지정한 값으로 채워진 배열을 리턴합니다.
 */

    const arr1 = ['a', 'b', 'c', 'd'];
    arr1.fill('A'); // ['A', 'A', 'A', 'A']
    document.write(arr1 + '<br>');

    const arr2 = ['a', 'b', 'c', 'd'];
    arr2.fill('A', 1); // ['a', 'A', 'A', 'A']
    document.write(arr2 + '<br>');

    const arr3 = ['a', 'b', 'c', 'd'];
    arr3.fill('A', 1, 3); // ['a', 'A', 'A', 'd']
    document.write(arr3 + '<br>');

    // 배열 선언과 동시에 fill 사용

    const arr4 = new Array(4).fill('a');
    console.log(arr4);

