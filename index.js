function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line. `
}

function currentLine(katzDeliLine) {
  let output = [];
  if (katzDeliLine.length > 0) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      output += (i + 1) + ". " + katzDeliLine[i] + ", ";
    }
    output = output.slice(0, output.length - 2);
    return "The line is currently: " + output;
  } else {
    return "The line is currently empty.";
  }
}
