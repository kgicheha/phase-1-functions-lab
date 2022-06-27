// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(destination) {
    return Math.abs(destination- hq)
}
function distanceFromHqInFeet(destination) {
    return (distanceFromHqInBlocks(destination) * 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start -destination) *264
}

function calculatesFarePrice (start, destination){
    let distance = Math.abs(start-destination)* 264
    if (distance < 400) {
        return 0;
    }
    else if(distance >= 400 && distance <= 2000) {
        return parseFloat((distance * 0.02 -8).toFixed(2));
    }
    else if(distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}