/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    ParkingSystem.big = big;
    ParkingSystem.medium = medium;
    ParkingSystem.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch (carType) {
        case 1:
            ParkingSystem.big -= 1;
            return ParkingSystem.big < 0 ? false : true;
        case 2:
            ParkingSystem.medium -= 1;
            return ParkingSystem.medium < 0 ? false : true;
        case 3:
            ParkingSystem.small -= 1;
            return ParkingSystem.small < 0 ? false : true;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */