'use strict';

const {
  getRow,
  getColumn,
  isUniqueValueInRow,
  isUniqueValueInColumn,
  getSubBoardIndices
} = require('../../../src/helpers');
const { puzzle } = require('../../test-data/sudoku-puzzle-easy');

describe('getRow', () => {
  test('Should return row', () => {
    expect(getRow(2, puzzle)).toStrictEqual([4, 8, 0, 0, 6, 0, 0, 5, 0]);
  });
});

describe('getColumn', () => {
  test('Should return column', () => {
    expect(getColumn(3, puzzle)).toStrictEqual([2, 0, 0, 7, 0, 0, 0, 0, 0]);
  });
});

describe('isUniqueValueInRow', () => {
  describe('When value is unique in row', () => {
    test('Should return true', () => {
      expect(isUniqueValueInRow(1, 0, [1, 3, 6, 2, 5, 9, 7, 4, 8])).toBeTruthy();
    });
  });

  describe('When value is not unique in row', () => {
    test('Should return false', () => {
      expect(isUniqueValueInRow(1, 2, [1, 3, 1, 2, 5, 9, 7, 4, 8])).toBeFalsy();
    });
  });
});

describe('isUniqueValueInColumn', () => {
  describe('When value is unique in column', () => {
    test('Should return true', () => {
      expect(isUniqueValueInColumn(1, 0, [1, 3, 6, 2, 5, 9, 7, 4, 8])).toBeTruthy();
    });
  });

  describe('When value is not unique in column', () => {
    test('Should return false', () => {
      expect(isUniqueValueInColumn(1, 2, [1, 3, 1, 2, 5, 9, 7, 4, 8])).toBeFalsy();
    });
  });
});

describe('getSubBoardIndices', () => {
  describe('When cell in sub board #1', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(2, 2)).toStrictEqual({
        rowStartIndex: 0,
        rowEndIndex: 2,
        columnStartIndex: 0,
        columnEndIndex: 2
      });
    });
  });

  describe('When cell in sub board #2', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(2, 5)).toStrictEqual({
        rowStartIndex: 0,
        rowEndIndex: 2,
        columnStartIndex: 3,
        columnEndIndex: 5
      });
    });
  });

  describe('When cell in sub board #3', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(2, 7)).toStrictEqual({
        rowStartIndex: 0,
        rowEndIndex: 2,
        columnStartIndex: 6,
        columnEndIndex: 8
      });
    });
  });

  describe('When cell in sub board #4', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(5, 2)).toStrictEqual({
        rowStartIndex: 3,
        rowEndIndex: 5,
        columnStartIndex: 0,
        columnEndIndex: 2
      });
    });
  });

  describe('When cell in sub board #5', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(5, 5)).toStrictEqual({
        rowStartIndex: 3,
        rowEndIndex: 5,
        columnStartIndex: 3,
        columnEndIndex: 5
      });
    });
  });

  describe('When cell in sub board #6', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(5, 8)).toStrictEqual({
        rowStartIndex: 3,
        rowEndIndex: 5,
        columnStartIndex: 6,
        columnEndIndex: 8
      });
    });
  });

  describe('When cell in sub board #7', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(7, 2)).toStrictEqual({
        rowStartIndex: 6,
        rowEndIndex: 8,
        columnStartIndex: 0,
        columnEndIndex: 2
      });
    });
  });

  describe('When cell in sub board #8', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(7, 5)).toStrictEqual({
        rowStartIndex: 6,
        rowEndIndex: 8,
        columnStartIndex: 3,
        columnEndIndex: 5
      });
    });
  });

  describe('When cell in sub board #9', () => {
    test('Should return sub board indices', () => {
      expect(getSubBoardIndices(7, 8)).toStrictEqual({
        rowStartIndex: 6,
        rowEndIndex: 8,
        columnStartIndex: 6,
        columnEndIndex: 8
      });
    });
  });
});
