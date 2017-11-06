let NewYearsResolutions = ['Rappel into a cave', 'Take a falconry class', 'Learn to Juggle'];
console.log(NewYearsResolutions[0]);
console.log(NewYearsResolutions[1]);
console.log(NewYearsResolutions[2]);
console.log(NewYearsResolutions);

// Strings are stored as an array
let hello = 'Hello World';
console.log(hello[6]);

// Set a value based on an array member value
let firstWord = NewYearsResolutions[0];
console.log(firstWord);

console.log(NewYearsResolutions[3]);  //undefined

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
console.log(seasons);

//modify an array member
seasons[0] = 'Cold!';
console.log(seasons);

//length is a property of a variable
console.log(NewYearsResolutions.length);  //Prints "3"

//Using PUSH method (add item(s) to end of an array)
let sampleArray = ['Item1', 'Item2'];
console.log('Two-Item Array: ' + sampleArray);
sampleArray.push('Item3', 'Item4');
console.log('Four-Item Array: ' + sampleArray);

//Using POP method (remove item from end of an array)
sampleArray.pop();
console.log('Back to 3: ' + sampleArray);