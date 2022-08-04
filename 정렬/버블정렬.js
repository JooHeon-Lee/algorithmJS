const arr5 = [6,5,3,1];

for(val in arr5){
  for(let i=0; i< arr5.length; i++)
    {
      if(arr5[i] > arr5[i+1])
        {
          let temp = 0;
          temp = arr5[i];
          arr5[i] = arr5[i+1];
          arr5[i+1] = temp;
        }
    }
}

console.log(arr5);