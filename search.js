/*--------------------------
            includes, toLowerCase()
---------------------------*/
const myString = 'tumi bondu kala paki ami jano  ki bosanyo kala tomi bolta paro ni';
const searchString = 'Paki';
// const doseExist = myString.includes('paki'); // khuja ber korta .includes
// const doseExist = myString.includes('paki');
// const doseExist = myString.includes(searchString);

const myStringLowerCase = myString.toLowerCase();
// const doseExist = myStringLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doseExist = myStringLowerCase.includes(searchStringLower);

const doseExistOneLine = myString.toLowerCase().includes(searchString.toLowerCase()); // All jinista aklaine a korer jono;

// console.log(doseExistOneLine);
// console.log(doseExist);

/*--------------------------
            indexOf
---------------------------*/
console.log(myString.indexOf('tumi'));

if (myString.indexOf('kala') !== -1) {
    console.log('Exists inside the string');
}
else {
    console.log('cannot find it');
}

/*--------------------------
            startsWith
---------------------------*/
console.log(myString.startsWith('tumi')); // true
console.log(myString.startsWith('2mi')); // false

/*--------------------------
        endsWith
---------------------------*/
const fileName = 'sabbir.pdf';
const otherName = 'myPic.png';
const finalFile = fileName.endsWith('.pdf');
console.log(finalFile);