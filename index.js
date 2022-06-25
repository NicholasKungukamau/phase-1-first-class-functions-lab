// Code your solution in this file!

 function returnFirstTwoDrivers(drivers) { 
     return drivers.slice(0,2);
 }

 function returnLastTwoDrivers(drivers) {
     return drivers.slice(-2, drivers.length);   
 }
 
 const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];
 
 function  createFareMultiplier(n) {
     return function () {
         return n * n;
     }
 }

 function fareDoubler(n) {
     return n * 2;
 }

 function fareTripler(f) {
     return f * 3;
 }

 function selectDifferentDrivers(arrayOfDrivers, method) {
     if (selectingDrivers[0] ===method) {
         return method(arrayOfDrivers);
     } else {
         return method(arrayOfDrivers);
     }
     }
 