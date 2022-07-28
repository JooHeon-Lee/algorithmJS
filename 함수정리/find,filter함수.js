/*find 함수
배열에서 특정 값을 찾는 조건을 callback 함수를 통해 전달하여,
조건에 맞는 값 중 첫번째 값을 리턴합니다.

*/
const arr = [
    {name: 'apple', price : 1000}, 
    {name: 'banana', price : 2000},
    {name: 'apple', price: 3000}
  ];
  
  function isApple(element)  {
    if(element.name === 'apple')  {
      return true;
    }
  }
  
  const apple = arr.find(isApple);
  document.writeln(apple.name); // apple
  document.writeln(apple.price); // 1000
  
  /*filter 함수
  find() 함수가 특정 조건에 부합하는 배열의 첫번째 값만을 리턴한다고 한다면,
  filter() 함수는 특정 조건에 부합하는 배열의 모든 값을 배열 형태로 리턴합니다.
  */


const arr2 = [
    {name: 'apple', price : 1000}, 
    {name: 'banana', price : 2000},
    {name: 'apple', price: 3000},
    {name: 'banana', price : 1557}
  ];
  
  function isApple(element)  {
    if(element.name === 'apple')  {
      return true;
    }
  }
  
  const apples = arr2.filter(isApple);
  const bananas = arr2.filter((element) => {
      if(element.name === 'banana')  {
      return true;
    }
  })
  
  document.writeln(apples.length); // 2
  document.writeln('<br>');
  document.writeln(apples[0].name + ',' + apples[0].price); // apple, 1000
  document.writeln(apples[1].name + ',' + apples[1].price); // apple, 3000
  
  document.writeln('<br>');
  
  document.writeln(bananas.length); // 2
  document.writeln('<br>');
  document.writeln(bananas[0].name + ',' + bananas[0].price); // apple, 1000
  document.writeln(bananas[1].name + ',' + bananas[1].price); // apple, 3000