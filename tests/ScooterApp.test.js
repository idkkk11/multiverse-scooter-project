const User = require('../src/User')
const Scooter = require('../src/Scooter')

const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser', () => {
  test('should return instance of User', () => {
    scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(scooterApp.registeredUsers["Joe Bloggs"]).toBeInstanceOf(User)
  })
})

// log in
describe('log in', () => {
    test('should not throw an error if username and password correct', () => {
        expect(() => {
            scooterApp.loginUser("Joe Bloggs", "test123");
        }).not.toThrow();
    })
    test('should throw an error if username or password incorrect', () => {
        expect(() => {
            scooterApp.loginUser("Joe Bloggssss", "test123");
        }).toThrow("username or password is incorrect");
    })
    
  })

// log out

describe('log out', () => {
    test('should not throw an error if username correct', () => {
        expect(() => {
            scooterApp.logoutUser("Joe Bloggs");
        }).not.toThrow();
    })
    test('should throw an error if username correct', () => {
        expect(() => {
            scooterApp.logoutUser("Joe Bloggsssssss");
        }).toThrow("no such user is logged in");
    })
    
  })

// rent scooter

// dock scooter
describe('dock scooter', () => {
    test('should add scooter to station', () => {
        scooterApp.createScooter("Station B")
        scooterApp.dockScooter(scooterApp.stations["Station B"][0], "Station A");
        expect(scooterApp.stations["Station A"][0]).toBeInstanceOf(Scooter);
    })
    
  })
