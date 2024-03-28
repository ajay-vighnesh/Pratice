let temp: any;

temp = "string";
temp = 2;
temp = true;

console.log('temp',temp);


// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);


