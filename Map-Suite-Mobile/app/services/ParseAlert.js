// Dummy database
const data = {
  ih10: [
    { exit: 'MC Carty ST/ US-90 ALTERNATE', latitude: 29.777856, longitude: -95.286993 },
    { exit: 'MONMOUTH DR', latitude: 29.794018, longitude: -95.075173 },
    { exit: 'PIN OAK', latitude: 29.777294, longitude: -95.826966 },
  ],
  ih45: [],
};

// Dummy alert
const alert = 'IH-10 EAST Westbound At MONMOUTH DR Road Debris - Cleared at 7:50 AM';

// Parse logic
// https://regex101.com/r/w42lHQ/1

/* 1

gets IH and exit
bug: grabs white space after regex if any
solution: use trim() method
bug: grabs AM or PM status
solution: pop substring with 'AM' or 'PM'
[A-Z]{2}[A-Z\-0-9\s]{1,}\b

*/

/* 2

gets flow of traffic
[A-Za-z]{1,}(bound)

*/

/* 6

display on map or not
solution: lowercase string before regex
(cleared)|(verified)

*/

const regex2 = /[A-Z]{2}[A-Z\-0-9\s]{1,}\b/g;
let array2;
let arr = [];

while ((array2 = regex2.exec(alert)) !== null) {
  arr.push(array2[0].trim());
  console.log(arr);
}
