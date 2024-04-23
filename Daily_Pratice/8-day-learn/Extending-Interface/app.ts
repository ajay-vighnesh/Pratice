interface Animal {
    name: string;
    makeSound();
}

interface Dog extends Animal {
    breed: string;
}

interface Cat extends Animal {
    color: string;
}

function introduceAnimal(animal: Animal) {
    console.log(`This is ${animal.name}.`);
    animal.makeSound();
}

function describeDog(dog: Dog) {
    console.log(`This dog is of breed ${dog.breed}.`);
}

function describeCat(cat: Cat) {
    console.log(`This cat is ${cat.color} in color.`);
}

let myDog: Dog = {
    name: "Buddy",
    breed: "Labrador",
    makeSound() {
        console.log("Woof!");
    }
};

let myCat: Cat = {
    name: "Whiskers",
    color: "Calico",
    makeSound() {
        console.log("Meow!");
    }
};

introduceAnimal(myDog); 
describeDog(myDog);     

introduceAnimal(myCat); 
describeCat(myCat);     
