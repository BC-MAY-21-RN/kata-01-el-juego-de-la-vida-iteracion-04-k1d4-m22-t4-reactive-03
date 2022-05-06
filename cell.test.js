const Cell = require('./cell.js');

test('Prueba del metodo randomStatus', () => {
    const cell = new Cell();
    expect(cell.randomStatus() === 1 || cell.randomStatus() === 0).toBeTruthy();
});

test('Prueba del metodo getStatus', () => {
    const cell = new Cell();
    expect(cell.getStatus() === 1 || cell.getStatus() === 0).toBeTruthy();
});

test('Prueba del metodo getNeighbors', () => {
    const cell = new Cell();
    expect(cell.getNeighbors()).toBe(0);
});

test('Prueba del metodo setNeighbors', () => {
    const cell = new Cell();
    cell.setNeighbors(5)
    expect(cell.getNeighbors()).toBe(5);
});

test('Prueba del metodo setStatus', () => {
    const cell = new Cell();
    cell.setStatus(10);
    expect(cell.getStatus()).toBe(10);
});


//https://flaviocopes.com/jest/#group-tests-using-describe