/*--------------------------
    split(' '), split('.'),split(''), slice(5, 10), substring(5, 10), join('. ');
---------------------------*/
const myString = 'tumi bondu kala paki ami jano ki. bosanyo kala tomi bolta paro ni. kala kala sada sada.';
const parts = myString.split(' ');
const sentences = myString.split('.');
const chars = myString.split('')
// console.log(chars);

const partial = myString.slice(5, 10); // start to end +1;
console.log(partial);

const partial2 = myString.substring(5, 10);
console.log(partial2);


const lines = [
    'tumi bondu kala paki ami jano ki',
    'bosanyo kala tomi bolta paro ni',
    'kala kala sada sada'
];
const newSong = lines.join('. ');
console.log(newSong);