// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
    constructor() {
        this.stations = {
            "Station A": [],
            "Station B": [],
            "Station C": []
        };
        this.registeredUsers = {}
    }

    registerUser(username, password, age) {
        let existing = false
        if (username in this.registeredUsers) {
            existing = true
        }

        if (!existing && age >= 18) {
            this.registeredUsers[username] = (new User(username, password, age))
            console.log("user has been registered")
        }
        else if (existing) {
            throw Error("already registered")
        }
        else if (age < 18) {
            throw Error("too young to register")
        }
        else {
            throw Error("unexpected error")
        }
    }

    loginUser(username, password) {
        if (username in this.registeredUsers) {
            const user = this.registeredUsers[username];
            user.login(password)
            console.log("user has been logged in")
        }
        else {
            throw Error("username or password is incorrect")
        }
    }

    logoutUser(username) {
        if (username in this.registeredUsers) {
            const user = this.registeredUsers[username];
            user.logout()
            console.log("user is logged out")
        }
        else {
            throw Error("no such user is logged in")
        }
    }

    createScooter(station) {
        if (station in this.stations) {
            this.stations[station].push(new Scooter(station))
        }
    }

    dockScooter(scooter, station) {
        if (station in this.stations) {
            if (!(scooter in this.stations)) {
                this.stations[station].push(scooter);
                scooter.dock(station)
            }
            else {
                throw Error("scooter already at station")
            }
        }
        else {
            throw Error("no such station")
        }
    }

    rentScooter(scooter, username) {
        if (scooter.user !== null) {
            throw Error("scooter is already rented")
        }
        else {
            const user = this.registeredUsers[username];
            let scooterStation = null;
            for (const [station, scooters] of Object.entries(this.stations)) {
                if (scooters.includes(scooter)) {
                    scooterStation = station;
                    break;
                }
            }
            this.stations[scooterStation] = this.stations[scooterStation].filter(s => s !== scooter);
            scooter.rent(user)
            console.log("scooter is rented")
        }
    }

    print() {
        console.log(this.registeredUsers);
        console.log(this.stations)
    }
}

module.exports = ScooterApp
