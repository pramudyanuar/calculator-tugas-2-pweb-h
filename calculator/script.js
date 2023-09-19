function calculate(operation) {
  var x = parseInt(document.getElementById("number1").value);
  var y = parseInt(document.getElementById("number2").value);
  var res = 0;

  switch (operation) {
    case "add": 
      res = x+y;
      break;
    case "sub": 
      res = x-y;
      break;
    case "mul": 
      res = x*y;
      break;
    case "div": 
      if (y !== 0) {
      res = x / y;
      } else {
      res = "Cannot divide by zero!";
      }
      break;
    default:
      res = "Invalid operation";
  }
  document.getElementById("result").textContent = "Result: " + res;
}
