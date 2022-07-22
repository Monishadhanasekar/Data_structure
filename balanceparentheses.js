var map = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  var isValid = function(s) {
  var stack = [];
    for (var i = 0; i < s.length; i++) {
      var item = s[i];
      //item is a variable whose value is the element at position i of the string
        if (map[item]) {
        //if item is a value, add that value i.e. ‘}’ to the stack
          stack.push(map[item]);
        } else {
        if (item !== stack.pop()) {
       //if item is not equal to the first element of the stack return false
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  console.log(isValid("{[]}"))
  console.log(isValid("{[]"))
