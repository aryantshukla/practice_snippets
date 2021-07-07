
const fact = (num) =>{ 
  if(num<=1)return 1;
  return num*fact(num-1)
}

const calperm = function(word){

  let freq = new Array(26)
  freq.fill(0)
  word = word.toLowerCase()
  for(let i in word){
    freq[word.charCodeAt(i)-97]++;
  }
  let ans = fact(word.length);
  
  for(let i=0;i<26;i++){
    ans = ans / fact(freq[i])
  }
  return ans
}
console.log(calperm("hello"))
console.log(calperm('bye'))