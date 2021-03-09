//import the function sum from the app.js file
const {sum } = require('./app.js');

//start your first test
//test('adds 14 + 9 to equal 23', ()=> {
//let total = sum(14,9);
//expect (total).toBe(23)})


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One Dollar should be 127.9 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromDollarToYen(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.2 / 1.2 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yenes);
})

test("127.9 is a Yen should be 0.8 Pounds", function(){
    // importo la funcion desde app.js
    const { fromYanToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromYanToPound(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 1 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yenes);
})