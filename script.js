// 1
const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

console.log(createInstructor("Terrell", "Jackson"));

// 2
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

console.log(instructor);

// 3

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

console.log(instructor2);
console.log(instructor2.sayHi());
console.log(instructor2.sayBye());

/* Write a function which generates an animal object. The function should accepts 3 arguments:

- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered. */

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      console.log(noise);
    },
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"
