// Code your solution in this file!

const distanceFromHqInBlocks = (value) => {
    if(value > 42) {
       return value - 42;
    } else {
       return 42 - value;
    }
 }
 
 const distanceFromHqInFeet = (value) => {
    const result = distanceFromHqInBlocks(value);
    return result * 264;
 }
 
 const distanceTravelledInFeet = (start, destination) => {
    if(start > destination) {
       return (start - destination) * 264;
    } else {
       return (destination - start) * 264;
    }
 }
 
 const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400) {
       return 0;
    } else if(distance > 400 && distance <= 2000) {
       return (distance - 400) * 0.02;
    } else if(distance > 2000 && distance <= 2500) {
       return 25;
    } else {
       return 'cannot travel that far';

    }
 }
