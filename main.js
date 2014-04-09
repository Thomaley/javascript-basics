// this is a comment

// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var fullName = firstName + " " + lastName;
//
// var age = prompt('What is your age?');
// age = parseInt(age);
//
// if(age > 20){
//   console.log('you can drink alcohol!');
// } else {
//   console.log('you are a baby. get out.');
// }
//
// if(age >= 0 && age < 6){ //between ages 0 and 5
//   console.log('Movie: G');
// } else if(age >=6 && age < 13){ //between ages 6 and 12
//   console.log('Movie: PG');
// } else if (age >= 13 && age < 18){ //between ages 13 and 17
//   console.log('Movie:PG-13');
// } else { //over 17
//   console.log('Movie: R');
// }

// var color = prompt('What is your favorite color?');
// color = color.toLowerCase();
//
// switch(color){
//   case 'blue':
//     console.log('blue is awesome');
//     break;
//   case 'green':
//     console.log('green is cool');
//     break;
//   case 'red':
//     console.log('red is sublime');
//     break;
//   default:
//     console.log('whatever...');
// }
//
// var number = prompt('Enter a number');
// number = parseInt(number);
// //
// // if(number > 0 && number < 10){
// //   while(number < 50){
// //     console.log('Number : ' + number);
// //     number += 2;
// //   }
// // }
//
// for(var i = number; i < 50; i++){
//   console.log('i : ' + i);
// }

// var colors = [];
//
// var response = prompt('Enter a color or (q)uit');
// response = response.toLowerCase();
//
// while (response !== 'q') {
//   colors.push(response);
//   console.log(colors);
//   response = prompt('Enter a color or (q)uit');
//   response = response.toLowerCase();
// }

// var evens = [],
//     odds = [];
//
// for(var i = 0; i < 100; i++){
//   if(i % 2 === 0){ // even
//     var square = i * i;
//     evens.push(square);
//   } else { // odd
//     var cube = Math.pow(i, 3);
//     odds.push(cube);
//   }
// }
//
// console.log(evens);
// console.log(odds);

function square(x){
  return x * x;
}

function cube(x){
  return Math.pow(x, 3);
}

function isOdd(x){
  return x % 2;
}

function area(l, w){
  return l * w;
}

function vol(l, w, h){
  return area(l * w) * h;
}






// debugger;
