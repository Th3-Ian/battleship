const boardModule = require('./gameboard');
const shipModule = require('./ship.js');
//const buildBoard = boardModule.buildBoard;

beforeEach(() => {
  return (buildBoard = boardModule.buildBoard());
});

test('Expect the gameboard to have 10 columns', () => {
  expect(buildBoard.columns).toBe(10);
});

test('Expect the gameboard to have 10 rows', () => {
  expect(buildBoard.rows).toBe(10);
});

test('Expect board squares to equal 100', () => {
  let board = buildBoard.displayBoard();
  console.log(board);
  expect(board.length).toBe(100);
});

test('Expect new board to be empty', () => {
  expect(buildBoard.isEmpty()).toBe(true);
});

describe('Placing ships', () => {
  test('Expect ship to be placed horizontally on board', () => {
    let ship = shipModule.buildShip('row boat', 2);
    buildBoard.displayBoard();
    buildBoard.placeShip(ship, 'b6');
    expect(buildBoard.squareArr).toEqual([
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'a6',
      'a7',
      'a8',
      'a9',
      'a10',
      'b1',
      'b2',
      'b3',
      'b4',
      'b5',
      'O',
      'O',
      'b8',
      'b9',
      'b10',
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
      'c7',
      'c8',
      'c9',
      'c10',
      'd1',
      'd2',
      'd3',
      'd4',
      'd5',
      'd6',
      'd7',
      'd8',
      'd9',
      'd10',
      'e1',
      'e2',
      'e3',
      'e4',
      'e5',
      'e6',
      'e7',
      'e8',
      'e9',
      'e10',
      'f1',
      'f2',
      'f3',
      'f4',
      'f5',
      'f6',
      'f7',
      'f8',
      'f9',
      'f10',
      'g1',
      'g2',
      'g3',
      'g4',
      'g5',
      'g6',
      'g7',
      'g8',
      'g9',
      'g10',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'h7',
      'h8',
      'h9',
      'h10',
      'i1',
      'i2',
      'i3',
      'i4',
      'i5',
      'i6',
      'i7',
      'i8',
      'i9',
      'i10',
      'j1',
      'j2',
      'j3',
      'j4',
      'j5',
      'j6',
      'j7',
      'j8',
      'j9',
      'j10'
    ]);
  });

  test('Expect ship to be placed vertically on board', () => {
    let ship = shipModule.buildShip('large boat', 4);
    ship.toggleDirection();
    buildBoard.displayBoard();
    buildBoard.placeShip(ship, 'c4');
    expect(buildBoard.squareArr).toEqual([
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'a6',
      'a7',
      'a8',
      'a9',
      'a10',
      'b1',
      'b2',
      'b3',
      'b4',
      'b5',
      'b6',
      'b7',
      'b8',
      'b9',
      'b10',
      'c1',
      'c2',
      'c3',
      'O',
      'c5',
      'c6',
      'c7',
      'c8',
      'c9',
      'c10',
      'd1',
      'd2',
      'd3',
      'O',
      'd5',
      'd6',
      'd7',
      'd8',
      'd9',
      'd10',
      'e1',
      'e2',
      'e3',
      'O',
      'e5',
      'e6',
      'e7',
      'e8',
      'e9',
      'e10',
      'f1',
      'f2',
      'f3',
      'O',
      'f5',
      'f6',
      'f7',
      'f8',
      'f9',
      'f10',
      'g1',
      'g2',
      'g3',
      'g4',
      'g5',
      'g6',
      'g7',
      'g8',
      'g9',
      'g10',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'h7',
      'h8',
      'h9',
      'h10',
      'i1',
      'i2',
      'i3',
      'i4',
      'i5',
      'i6',
      'i7',
      'i8',
      'i9',
      'i10',
      'j1',
      'j2',
      'j3',
      'j4',
      'j5',
      'j6',
      'j7',
      'j8',
      'j9',
      'j10'
    ]);
  });

  test('Expect out of bounds to throw error horizontally', () => {
    let ship = shipModule.buildShip('large boat', 4);

    buildBoard.displayBoard();
    expect(buildBoard.placeShip(ship, 'c8')).toEqual(
      'Cannot place, ship is out of bounds'
    );
  });

  test('Expect out of bounds to throw error vertically', () => {
    let ship = shipModule.buildShip('cruiser', 6);
    buildBoard.displayBoard();
    ship.toggleDirection();
    expect(buildBoard.placeShip(ship, 'h2')).toEqual(
      'Cannot place, ship is out of bounds'
    );
  });

  test('Expect error to throw when placing over another ship vertically', () => {
    let ship1 = shipModule.buildShip('fishing boat', 3);
    let ship2 = shipModule.buildShip('cruiser', 6);
    ship2.toggleDirection();
    buildBoard.displayBoard();
    buildBoard.placeShip(ship1, 'd3');
    expect(buildBoard.placeShip(ship2, 'c3')).toEqual(
      'Error: another ship is at this location'
    );
  });

  test('Expect error to throw when placing over another ship horizontally', () => {
    let ship1 = shipModule.buildShip('rowboat', 2);
    let ship2 = shipModule.buildShip('cruiser', 6);
    buildBoard.displayBoard();
    buildBoard.placeShip(ship1, 'd3');
    expect(buildBoard.placeShip(ship2, 'd1')).toEqual(
      'Error: another ship is at this location'
    );
  });

  test('Expect board coordinates to be pushed to ship horizontally', () => {
    let ship = shipModule.buildShip('tugboat', 3);
    buildBoard.displayBoard();
    buildBoard.placeShip(ship, 'f5');
    expect(ship.coordinates).toEqual([54, 55, 56]);
  });

  test('Expect board coordinates to be pushed to ship horizontally', () => {
    let ship = shipModule.buildShip('fishing', 4);
    ship.toggleDirection();
    buildBoard.displayBoard();
    buildBoard.placeShip(ship, 'c4');
    expect(ship.coordinates).toEqual([23, 33, 43, 53]);
  });
});

describe('taking hits', () => {
  beforeEach(() => {
    boardModule.buildBoard;
    buildBoard.displayBoard();
  });

  test('Expect recieveHit to update ship.arr', () => {
    let ship = shipModule.buildShip('fishing', 4);
    buildBoard.placeShip(ship, 'c4');
    buildBoard.recieveAttack(25);
    expect(ship.arr).toEqual(['O', 'X', 'O', 'O']);
  });

  test('Expect error to be thrown when selecting spot already hit', () => {});

  test.only('Expect board to be updated with X', () => {
    let ship = shipModule.buildShip('fishing', 4);
    buildBoard.placeShip(ship, 'b2');
    buildBoard.recieveAttack(12);
    buildBoard.recieveAttack(14);
    expect(buildBoard.squareArr).toEqual([
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'a6',
      'a7',
      'a8',
      'a9',
      'a10',
      'b1',
      'X',
      'O',
      'X',
      'O',
      'b6',
      'b7',
      'b8',
      'b9',
      'b10',
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',
      'c7',
      'c8',
      'c9',
      'c10',
      'd1',
      'd2',
      'd3',
      'd4',
      'd5',
      'd6',
      'd7',
      'd8',
      'd9',
      'd10',
      'e1',
      'e2',
      'e3',
      'e4',
      'e5',
      'e6',
      'e7',
      'e8',
      'e9',
      'e10',
      'f1',
      'f2',
      'f3',
      'f4',
      'f5',
      'f6',
      'f7',
      'f8',
      'f9',
      'f10',
      'g1',
      'g2',
      'g3',
      'g4',
      'g5',
      'g6',
      'g7',
      'g8',
      'g9',
      'g10',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'h7',
      'h8',
      'h9',
      'h10',
      'i1',
      'i2',
      'i3',
      'i4',
      'i5',
      'i6',
      'i7',
      'i8',
      'i9',
      'i10',
      'j1',
      'j2',
      'j3',
      'j4',
      'j5',
      'j6',
      'j7',
      'j8',
      'j9',
      'j10'
    ]);
  });
});
