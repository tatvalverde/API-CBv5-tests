import { expect } from 'chai'

describe('example', () =>{
  it('first', () => {
    expect(5+5).to.eq(10)
  })
})
describe('Operations with numbers', function () {
  const a = 5
  const b = 7

  it('Addition works properly', function () {
    expect(a + b).to.eq(12)
  })
  it('Subsraction works properly', function () {
    expect(a - b).to.eq(-2)
  })
})

describe('Operation with numbers', function () {
  const a = 8
  const b = 4

  it('Multiplication works properly', function () {
    expect(a * b).to.eq(32)
  })
  it('Division works properly', function () {
    expect(a / b).to.eq(2)
  })
})