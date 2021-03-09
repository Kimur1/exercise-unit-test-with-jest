//*console.log("Hello World")

//*const sum = (a,b) => {
  //  return a+b
//}
//just a console log for ourselves.
//console.log(sum(7,3))
//export the function to be used other files
// (similar to the keyword 'export' when using webpack)
///module.exports = {sum};

// one euro is:

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen= function(valueInEuro){
    //convertir valor a dolares
    let valueInYen = valueInDollar / 1.2 *127.9;
// return value
    return valueInYen;
}


const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    //return
    return valueInDollar;

}

const fromYanToPound = function(valueInYen){
    let valueInPound = valueInYen / 127.9 * 0.8;
//return
    return valueInPound;
}


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // returnamos el valor
    return valueInDollar;
}
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }