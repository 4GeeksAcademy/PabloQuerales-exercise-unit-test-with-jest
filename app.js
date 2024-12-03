let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = (valueInEuro)=> {
    let valueInDollar = valueInEuro * oneEuroIs["USD"].toFixed(2);
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) =>{
    let conversion = ((1*oneEuroIs["JPY"])/oneEuroIs["USD"]).toFixed(2)
    let valueInYen = valueInDollar * conversion
    return valueInYen
}
const fromYenToPound = (valueInYen) =>{
    let conversion = (1*oneEuroIs["GBP"])/oneEuroIs["JPY"].toFixed(2)
    let  valueInPound = valueInYen * conversion
    return valueInPound
}
console.log(fromDollarToYen(1))
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound}