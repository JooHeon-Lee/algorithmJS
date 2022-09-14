const longestPalindrome = (s) => {
    let answer = s[0];
    const N = s.length;
  
    for (let i=0; i < N; i++) {
      // 끝점, 지금까지 나온 펠린드롬중 가장 긴 값이 answer이므로 끝점은 시작점에 answer의 길이만큼 더해 시작하면서 시간효율을 높힘
      for (let j=i+answer.length; j < N; j++) {
        if (s[i] === s[j] && isPalindrome(s, i, j) ) {
          answer = s.slice(i, j+1);
        } 
      }
    }
    return answer;
  };
  
  // 펠린드롬 체크 함수
  const isPalindrome = (string, left, right) => {
    let returnIsPalindrome = true;
    while (left < right) {
      if (string[left] !== string[right]) {
        returnIsPalindrome = false;
        break
      }
      left++;
      right--;
    }
    return returnIsPalindrome;
  }