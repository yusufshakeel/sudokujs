'use strict';

const engine = require('../../src/engine');

const {
  input: easyPuzzleInput,
  output: easyPuzzleOutput,
  solution: easyPuzzleSolution
} = require('../test-data/sudoku-puzzle-easy');

const {
  input: hardPuzzleInput,
  output: hardPuzzleOutput,
  solution: hardPuzzleSolution
} = require('../test-data/sudoku-puzzle-hard');

const {
  input: mediumPuzzleInput,
  output: mediumPuzzleOutput,
  solution: mediumPuzzleSolution
} = require('../test-data/sudoku-puzzle-medium');

const {
  input: unsolvablePuzzleInput,
  output: unsolvablePuzzleOutput,
  solution: unsolvablePuzzleSolution
} = require('../test-data/sudoku-puzzle-unsolvable');

const { input: expertPuzzleInput } = require('../test-data/sudoku-puzzle-expert');

const { input: invalidPuzzleInput } = require('../test-data/sudoku-puzzle-invalid-input');

describe('engine', () => {
  describe('When input is invalid', () => {
    test('Should return result', () => {
      const result = engine({ input: invalidPuzzleInput });
      expect(result.isPuzzleSolved).toBeFalsy();
      expect(result.error.message).toBe(
        'Input board contains invalid number in Row: 0, Column: 0.'
      );
    });
  });

  describe('Solve easy puzzle', () => {
    test('Should return result', () => {
      const result = engine({ input: easyPuzzleInput });
      expect(result.isPuzzleSolved).toBeTruthy();
      expect(result.board).toStrictEqual(easyPuzzleSolution);
      expect(result.output).toStrictEqual(easyPuzzleOutput);
    });
  });

  describe('Solve medium puzzle', () => {
    test('Should return result', () => {
      const result = engine({ input: mediumPuzzleInput });
      expect(result.isPuzzleSolved).toBeTruthy();
      expect(result.board).toStrictEqual(mediumPuzzleSolution);
      expect(result.output).toStrictEqual(mediumPuzzleOutput);
    });
  });

  describe('Solve hard puzzle', () => {
    test('Should return result', () => {
      const result = engine({ input: hardPuzzleInput });
      expect(result.isPuzzleSolved).toBeTruthy();
      expect(result.board).toStrictEqual(hardPuzzleSolution);
      expect(result.output).toStrictEqual(hardPuzzleOutput);
    });
  });

  describe('Solve expert puzzle', () => {
    test('Should return result', () => {
      const result = engine({ input: expertPuzzleInput });
      expect(result.isPuzzleSolved).toBeFalsy();
    });
  });

  describe('Unsolvable puzzle', () => {
    test('Should return result', () => {
      const result = engine({ input: unsolvablePuzzleInput });
      expect(result.isPuzzleSolved).toBeFalsy();
      expect(result.board).toStrictEqual(unsolvablePuzzleSolution);
      expect(result.output).toStrictEqual(unsolvablePuzzleOutput);
    });
  });
});
