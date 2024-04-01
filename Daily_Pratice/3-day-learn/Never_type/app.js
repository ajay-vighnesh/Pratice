function cancel(message) {
    throw new Error(message);
}
var loop = function forever() {
    while (true) {
        console.log('Hello');
    }
};
function demo(a) {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
}
console.log(demo('ahdahsb'));
function demo1(a) {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
    return neverOccur();
}
var neverOccur = function () {
    throw new Error('Never!');
};
console.log(demo1(1));
