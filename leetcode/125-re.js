/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s=s.toUpperCase();
  arr=[]
  for(let i=0;i<s.length;i++){
      if(s[i]>='A' && s[i]<='Z' || s[i]>='0'&& s[i]<='9'){
          arr.push(s[i])}
  }
  
  return arr.join('')===arr.reverse().join('');
};



/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s=s.replace(/[^a-z0-9]+/gi,'').toUpperCase();
    return s===s.split('').reverse().join('');
};