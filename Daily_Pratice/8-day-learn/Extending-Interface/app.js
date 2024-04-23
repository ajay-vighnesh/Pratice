function introduceAnimal(animal) {
    console.log("This is ".concat(animal.name, "."));
    animal.makeSound();
}
function describeDog(dog) {
    console.log("This dog is of breed ".concat(dog.breed, "."));
}
function describeCat(cat) {
    console.log("This cat is ".concat(cat.color, " in color."));
}
var myDog = {
    name: "Buddy",
    breed: "Labrador",
    makeSound: function () {
        console.log("Woof!");
    }
};
var myCat = {
    name: "Whiskers",
    color: "Calico",
    makeSound: function () {
        console.log("Meow!");
    }
};
introduceAnimal(myDog); // Output: This is Buddy. (followed by Woof!)
describeDog(myDog); // Output: This dog is of breed Labrador.
introduceAnimal(myCat); // Output: This is Whiskers. (followed by Meow!)
describeCat(myCat); // Output: This cat is Calico in color.
