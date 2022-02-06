const shipModule = require('./ship');
const buildShip = shipModule.buildShip;
/*
describe('ships length', () =>{
	test('it should display ships length is 4', () => {
		//const fourUnitShip = buildShip(4);
		expect(buildShip(4).stretch).toBe(4);
	})
})

test('Array should be 4 in length', () => {
	expect(buildShip(4).arr.length).toBe(4)
})

test('Hit location should return X in obj array', () => {
	expect(buildShip(5).hit(2)).toContain('O', 'X', 'O', 'O', 'O')
})

test('Expect hit to throw an error', () => {
	expect(() => {
		buildShip(3).hit(5);
	}).toThrow('Hit misses');
})

test('Expect sunk to return false', () => {
	expect(buildShip(3).sunk()).toBe(false);
})

test('Expect sunk to return true when all arr elements are X', () => {
	let ship = buildShip(2);
	ship.hit(1);
	ship.hit(2);
	console.log(ship);
	expect(ship.sunk()).toBe(true);
})

*/