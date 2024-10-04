const Scooter = require('../src/Scooter')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter("Station A")
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
  // rent method
  test('rent scooter', () => {
    const scooter = new Scooter("Station A")
    scooter.rent("Me")
    expect(scooter.station).toBe(null)
  })

  // dock method
  test('dock scooter', () => {
    const scooter = new Scooter("Station A")
    scooter.dock("Station B")
    expect(scooter.station).toBe("Station B")
  })

  // requestRepair method

  // charge method

})
