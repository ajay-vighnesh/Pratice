function increment(counter) {
    return counter++;
}
console.log(increment(2));
var items = [1, 2, 3, null];
var items1 = [0, 1, null, 'Hi'];
var arr = [new Date(), new RegExp('\d+')];
console.log(items);
console.log(items1);
console.log(arr);
document.addEventListener('click', function (event) {
    console.log(event.button); // 
});
