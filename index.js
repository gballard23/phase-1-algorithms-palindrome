function isPalindrome(word) {
  // Write your algorithm here
  const arrVal = word.split('');

  const reverse = arrVal.reverse();

  const reverseString = reverse.join('');

  if(word == reverseString){
  return true
  }else{
    return false
  }
}


/*  
  iterate over input string 
  compare input string to itself backward
  return true if equal
*/

/*
  The palindrome function takes a string and splits it in to individual letters
  then reverses the order of those letters and joins them back together as a new string. The new string is 
  compared to the original string and returns true is they are equal. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expection: false");
  console.log('=>', isPalindrome('gerren'));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
