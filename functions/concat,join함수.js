/**
 * concat() - 문자열 이어 붙이는 함수
 *  str.concat(str2, str3.....strN) => str2는 필수 값 str 과 str2를 이어 붙임 . str2 는 무조건 문자열이 와야함 
 *  ++ 배열도 concat 사용 가능 but) str, str2가 배열이어야 함.
 *  
 * 
 */
 const arr = ['Hello'];
 const str = 'Hello';
 
 // 배열 합치기
 const str1 = arr.concat(' ', 'world'); // Hello, , world
 // 문자열 합치기
 const str2 = str.concat(' ', 'world'); // Hello world
 
 document.write(str1);
 document.write('<br>');
 document.write(str2);

 /**
  * join() - 문자열 연결 해주는 함수
  * join() 함수는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  * arr.join([seperator])
  * 
  */

  const str3 = ['Hello', 'world'].join();
  const str4 = ['Hello', 'world'].join('♥');
  
  document.write(str3);
  document.write('<br>');
  document.write(str4);
  