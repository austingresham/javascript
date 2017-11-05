let userName = 'Austin';
let knowsJavaScript = true;
let otherName = 'Gresham';

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}
if (!otherName) {
    console.log('The statement is false.');
} else {
    console.log('The statement is true');
}