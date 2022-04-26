function numberRange(num){
  let response = num + " ";
  switch (true) {
    case num < 0:
      response += "is less than 0";
      break;
    case num > -1 && num < 51:
      response += "is between 0 and 50";
      break;
    case num >50 && num < 101:
      response += "is between 51 and 100";
      break;
    case num > 100:
      response += "is greater than 100";
  }
  console.log(response);
}
numberRange(25)
numberRange(-1)
numberRange(75)
numberRange(103)
numberRange(50)
