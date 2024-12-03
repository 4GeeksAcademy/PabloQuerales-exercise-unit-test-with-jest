test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dolar should be 146,26 Yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 dolares debe ser (3.5 * 146.26)
    const expected = 3.5 * 146.26;

    // Hago mi comparación (la prueba)
    expect(yen.toFixed(2)).toBe(expected.toFixed(2)); // 1 dolar son 146.26 yenes, entonces 3.5 dolares deberían ser = (3.5 * 146.26)
})
test("One yen should be 0.0056 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(350);

    // Si 100 yenes son 0.56 pounds, entonces 350 yenes debe ser (350 * 0.0056)
    const expected = 350 * 0.0055591054313099;

    // Hago mi comparación (la prueba)
    expect(pound.toFixed(2)).toBe(expected.toFixed(2)); // 1 yen son 0.0056 pounds, entonces 350 yenes deberían ser = (350 * 0.0056)
})