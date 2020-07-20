// comparando valor desconsiderando o tipo
console.log('01)', '1' == 1);
console.log('02)', '1'===1 );
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

const d1 = new Date(0)
const d2 = new Date(0)
// Os próximos resultados serão falsos porque estamos comparando endereços de memória.
console.log('05)', d1 === d2);
console.log('06)', d1 == d2);

console.log('07)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);
