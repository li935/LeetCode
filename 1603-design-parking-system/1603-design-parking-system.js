/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    ParkingSystem.space = [big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    return isFull();
    
    function isFull() {
        if (ParkingSystem.space[carType - 1] === 0) {
            return false;
        } else {
            ParkingSystem.space[carType - 1]--;
            
            return true;
        }
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */