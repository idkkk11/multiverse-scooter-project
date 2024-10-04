class Scooter {
    static nextSerial = 0
    constructor(station) {
        this.station = station;
        this.user = null;
        this.charge = 100;
        this.isBroken = false;
        this.serial = Scooter.nextSerial + 1
    }

    rent(user) {
        if (this.charge > 20 && !this.isBroken) {
            this.station = null;
            this.user = user;
        }
        else if (this.charge <= 20) {
            throw Error ("scooter needs to charge")
        }
        else {
            throw Error ("scooter needs repair")
        }
    }

    dock(station) {
        this.station = station;
        this.user = null
    }

}

module.exports = Scooter
