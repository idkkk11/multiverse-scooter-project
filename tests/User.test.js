const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test('password should be a test123', () => {
    expect(user.password).toBe('test123')
  })
  // test age
  test('age should be a 21', () => {
    expect(user.age).toBe(21)
  })
})

describe('User functions tests', () => {
    // test login
    test('user should be logged in after login()', () => {
        user.login("test123")
        expect(user.loggedIn).toBe(true)
    })
    // test logout
    test('user should be logged out after logout()', () => {
        user.logout()
        expect(user.loggedIn).toBe(false)
    })
  })
