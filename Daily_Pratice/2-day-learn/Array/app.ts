let skills : string[] = [];

skills[0] = "Problem Solving";
skills[1] = "Programming";
skills.push("js")

// skills = ["js","ts"];
console.log(skills);

let names = ["ajay","vighnesh",7];
console.log(names);

let courses : string[];
courses = ["c","c++"];
courses.push('java');
console.log("courses",courses)

let course = courses[0];
console.log('course',course)


let series = [1,2,3,4,5];
console.log('length_of_series',series.length)

let num = [1,2,3];
let double_num = num.map(e => e*2);
console.log(double_num)

let scores = ['Programming', 5, 'Software Design', 4]; 
console.log('scores',scores)

let scores1 : ( string | number ) [] ;
scores1 = ["jjjj",2,'adcch',8];
console.log('scores1',scores1)