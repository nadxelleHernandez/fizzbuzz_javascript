import { fizzBuzz } from '../src/fizzbuzz';
import { mystery } from '../src/mystery';

describe('fizzBuzz', () => {
  test('returns Fizz on multiples of 3', () => {
    // Arrange
    const num = 9;

    // Act
    const result = fizzBuzz(num);

    // Assert
    expect(result).toEqual('Fizz');
  });

  test('returns Buzz on multiples of 5', () => {
    expect(fizzBuzz(25)).toEqual('Buzz');
  });

  test('multiples of three and five return FizzBuzz', () => {
    // Arrange
    const num = 225;

    // Act
    const result = fizzBuzz(num);

    // Assert
    expect(result).toEqual('FizzBuzz');
  });

  test('non-multiples of three or five return the number itself', () => {
    // Arrange
    const num = 4;

    // Act
    const result = fizzBuzz(num);

    // Assert
    expect(result).toEqual(num);
  });
});

describe('mystery', () => {
  test('mystery is defined', () => {
    expect(mystery).toBeDefined();
  });

  test('returns true when entire english alphabet is present in lowercase', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = mystery(alphabet);
    expect(result).toBeTruthy();
  });

  test('returns false when one letter from the alphabet is missing', () => {
    const alphabetWithMissingX = 'abcdefghijklmnopqrstuvwyz';
    const result = mystery(alphabetWithMissingX);
    expect(result).toBeFalsy();
  });

  test('returns true when all letters of the alphabet are present, even with spaces and repetition', () => {
    const text = 'the quick brown fox jumps over the lazy dog';
    const result = mystery(text);
    expect(result).toBeTruthy();
  });

  test('returns false with empty input string', () => {
    expect(mystery('')).toBeFalsy();
  });

  test('returns true when all letters of the alphabet are present, even with symbols and numbers', () => {
    const text = 'the 1 /quick brown fox/ jumps over the _lazy dog_!';
    expect(mystery(text)).toBeTruthy();
  });
});
