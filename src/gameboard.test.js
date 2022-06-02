const boardModule = require('./gameboard');
const buildBoard = boardModule.buildBoard;

test('Expect the gameboard to have 10 columns', () => {
  expect(buildBoard().columns).toBe(10);
});

test('Expect the gameboard to have 10 rows', () => {
  expect(buildBoard().rows).toBe(10);
});

test('Expect board squares to equal 100', () => {
  let board = buildBoard();
  board.displayBoard();
  expect(board.squareArr.length).toBe(100);
});
