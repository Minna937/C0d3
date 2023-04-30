const fn = require('./Array-last.js')

describe('oddToZero function', () => {
    it('should zero when some elements are odd', () => {
      const result = fn.oddToZero([1, 2, 3, 4, 5])
      expect(result).toEqual([0, 2, 0, 4, 0])
    })
    it('should zero when all elements are odd', () => {
      const result = fn.oddToZero([1, 3])
      expect(result).toEqual([0, 0])
    })
    it('should return same array when no elements are odd', () => {
      const result = fn.oddToZero([8, 10, 12])
      expect(result).toEqual([8, 10, 12])
    })
  })

  describe('firstLetters function', () => {
    it('should grab the first letters from 5 strings', () => {
      const result = fn.firstLetters(['hello', 'my', 'name', 'is', 'pikachu'])
      expect(result).toEqual(['h', 'm', 'n', 'i', 'p'])
    })
    it('should grab the first letters from 3 strings', () => {
      const result = fn.firstLetters(['JavaScript', 'is', 'awesome'])
      expect(result).toEqual(['J', 'i', 'a'])
    })
    it('should return an empty array when given an empty array', () => {
      const result = fn.firstLetters([])
      expect(result).toEqual([])
    })
  })

  describe('nonPrimeToZero function', () => {
    it('should zero all numbers when non-prime', () => {
      const result = fn.nonPrimeToZero([-13, 0, 1, 4, 6])
      expect(result).toEqual([0, 0, 0, 0, 0])
    })
    it('should return an identical array if all are prime', () => {
      const result = fn.nonPrimeToZero([2, 17, 1601, 7919])
      expect(result).toEqual([2, 17, 1601, 7919])
    })
    it('should change only prime numbers to 0', () => {
      const result = fn.nonPrimeToZero([1, 2, 3, 4, 5])
      expect(result).toEqual([0, 2, 3, 0, 5])
    })
  })
  
  describe('append', () => {
    it('should append a string to 5 strings', () => {
      const result = fn.append(
        ['hello', 'my', 'name', 'is', 'pikachu'],
        ' -log'
      )
      expect(result).toEqual([
        'hello -log',
        'my -log',
        'name -log',
        'is -log',
        'pikachu -log'
      ])
    })
    it('should append a string to 2 strings', () => {
      const result = fn.append(['<img/>', '<p></p>'], '<hr/>')
      expect(result).toEqual(['<img/><hr/>', '<p></p><hr/>'])
    })
    it('should not modify the original array', () => {
      const arr = ['Spiderman', 'Peter Parker']
      fn.append(arr, 'Mary Jane')
      expect(arr).toEqual(['Spiderman', 'Peter Parker'])
    })
  })

  describe('noMoreEvens function', () => {
    it('should remove evens from an array with a mix of numbers', () => {
      const result = fn.noMoreEvens([1, 2, 6, 4, 5])
      expect(result).toEqual([1, 5])
    })
    it('should remove all numbers when even', () => {
      const result = fn.noMoreEvens([2, 16, 40, 52])
      expect(result).toEqual([])
    })
    it('should not touch an array of all odd numbers', () => {
      const result = fn.noMoreEvens([1, 571, 3, 9])
      expect(result).toEqual([1, 571, 3, 9])
    })
    it('should remove negative even numbers as well', () => {
      const result = fn.noMoreEvens([-2, -571, -4])
      expect(result).toEqual([-571])
    })
  })