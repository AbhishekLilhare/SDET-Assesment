// Find the character that has the highest number of occurrences within a certain string, ignoring case.

var getMax = (str) => {
 let max = 0,
     maxChar = '',
     string = str.toLowerCase(); // For ignoring case update the string to lowercase

  // Function to check each chracter to its next
  string.split('').forEach(function(char){
    if(string.split(char).length > max) {
        max = string.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
};

getMax("Character");