// Dummy database
const data = {
  ih10: [
    { exit: 'MC Carty ST/ US-90 ALTERNATE', latitude: 29.777856, longitude: -95.286993 },
    { exit: 'MONMOUTH DR', latitude: 29.794018, longitude: -95.075173 },
    { exit: 'PIN OAK', latitude: 29.777294, longitude: -95.826966 },
  ],
  ih45: [],
  wp: [{ exit: 'HIGHWAY 6', latitude: 0, longitude: 0 }],
};

// Dummy alert
const alert =
  'US-290 NORTHWEST Eastbound At SH-99 Lanier Pkwy Road Debris - Cleared at 7:39 PM WESTPARK TOLLWAY Westbound Before HIGHWAY 6 Stall - Cleared at 7:40 PM Manage | Unsubscribe';

const HOU_FREEWAYS = {
  b8: 'BELTWAY',
  h: 'HARDY',
  i10: 'IH-10',
  i45: 'IH-45',
  i610: 'IH-610',
  i69: 'IH-69',
  s225: 'SH-225',
  s249: 'SH-249',
  s288: 'SH-288',
  u290: 'US-290',
  wp: 'WESTPARK',
};

// Parse logic
// https://regex101.com/r/w42lHQ/1

/* 1

gets IH and exit
bug: grabs white space after regex if any
solution: use trim() method
bug: grabs AM or PM status
solution: updated regex
(?!PM|AM)([A-Z]{2}[A-Z\-0-9\s]{1,}\b)

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

/********************************************************************************* */

// regex to find freeway and exit
const regex2 = /(?!PM|AM)([A-Z]{2}[A-Z\-0-9\s]{1,}\b)/g;
let array2;
let arr = [];

// accumulate data to compare with database of markers
while ((array2 = regex2.exec(alert)) !== null) {
  let current = array2[0].trim();
  arr.push(current);
}

console.log(arr);

// 1. Grab frwy from HOU_FREEWAYS by checking current arr element against its values, then compare current frwy to db
// 2. Step through frwy exits array and compare next arr element to exits
// 3. If exits compare then retrieve coords and send to AlertMarker.js component
//      a. If no comparisons use next arr element in steps 2 and 3
// 4. Repeat steps 1 - 3 for any remainding arr elements

function grabFrwy(substring) {
  let frwys = Object.values(HOU_FREEWAYS);
  let frwyKey = Object.keys(HOU_FREEWAYS);
  let match;

  for (let i = 0; i < frwys.length; i++) {
    if (substring.search(frwys[i]) > -1) {
      match = frwyKey[i];
    }
  }

  return match;
}

// Expecting wp
// console.log(grabFrwy('WESTPARK TOLLWAY'));
let i = 0;
while (i < arr.length) {
  let current = grabFrwy(arr[i]);

  if (current !== undefined) {
    let dbFreewayKeys = Object.keys(data);

    for (let j = 0; j < dbFreewayKeys.length; j++) {
      if (current === dbFreewayKeys[j]) {
        i++;

        // Here, I need to make another "grabExit()" function because my marker data might differ from whatever I get from alert messages
        // Compares w/e is after current in arr to exit

        // Get value "exit" from object "data" with key "a"
        const a = dbFreewayKeys[j];
        console.log(
          `My exit: ${data[a][0].exit} and lat: ${data[a][0].latitude} lon: ${data[a][0].longitude}`
        );
      }
    }
  }

  i++;
}
