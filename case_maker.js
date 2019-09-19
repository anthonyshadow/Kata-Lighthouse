let camelCase = function(input) {
  let newString = '';
  for (let i = 0; i < input.length; i++){
    if(input.charAt(i) === " ") {
      newString += input.charAt(i +  1).toUpperCase();
      i++;
      //console.log(newString);
    } else {
      newString += input.charAt(i);
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));