const CSV = require('../csv');
const testecsv01 = new CSV({separator: ';', output: ['output']});
const testecsv02 = new CSV({separator: ';', output: ['output1', 'output2']});
const testecsv03 = new CSV({separator: ';', output: ['output']});

//csv01
const matrixteste01 = [[30], [40], [50]];
testecsv01.insertOutput('./csv01.csv', matrixteste01);
//csv01.csv a ser atualizado.
//input;output
//1;10
//2;20
//3;
//4;
//5;
console.log('CSV01 atualizado!!!');


//csv02
const matrixteste02 = [[30,300], [40,400], [50,500]];
testecsv02.insertOutput('./csv02.csv', matrixteste02);
//csv02.csv a ser atualizado.
//input;output1;output2
//1;10,100
//2;20,200
//3;
//4;
//5;
console.log('CSV02 atualizado!!!');

//csv03
const matrixteste03 = [[30]];
testecsv01.insertOutput('./csv03.csv', matrixteste03);
//csv03.csv a ser atualizado.
//input;output
//1;10
//2;20
//3;
//4;40
//5;50
console.log('CSV03 atualizado!!!');