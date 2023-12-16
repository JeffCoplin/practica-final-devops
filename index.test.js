// Ejemplo muy simple de prueba Jest
function sumar(a, b) {
    return a + b;
}

test('Sumar 1 + 2 debería ser igual a 3', () => {
    expect(sumar(1, 2)).toBe(3);
});
