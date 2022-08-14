// declare namespace NodeJS {
//   interface Global {
//     testRequest: import('supertest').SuperTest<import('supertest').Test>;
//   }
// }

//correção para versão 12x ++
// eslint-disable-next-line no-var
declare var testRequest: import('supertest').SuperTest<import('supertest').Test>;
