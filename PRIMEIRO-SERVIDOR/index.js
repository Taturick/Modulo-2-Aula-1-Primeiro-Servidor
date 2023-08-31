const { uniq }= require('lodash');
const {arrayNomes, arrayNumeros} = require("lodash")

const array = require('./array');

const arrays = [1,2,3,4,4,6,7,1];

console.log(arrays)
const arraysUnic = uniq(arrays)
console.log(arraysUnic)


console.log(array.arrayNumeros, array.arrayNomes)
const arrayUnicoNumbers =uniq(array.arrayNumeros);
const arrayUnicoNomes =uniq(array.arrayNomes);
console.log(arrayUnicoNumbers)
console.log(arrayUnicoNomes)


