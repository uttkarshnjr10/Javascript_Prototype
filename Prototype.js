// diving into the Prototype in JavaScript
// Prototype is a JavaScript framework that extends the built-in JavaScript objects

// Parent object (like a base class)
let animal = {
    eats: true,
    walk() {
      console.log("Animal is walking");
    }
  };
  
  // rabbit will use animal as a prototype (like inheritance)
  let rabbit = {
    jumps: true,
    __proto__: animal  // this means rabbit can also use animal's properties
  };
  
  // Using inherited and own properties
  console.log(rabbit.eats);   // true → because it comes from animal
  console.log(rabbit.jumps);  // true → rabbit's own property

  
  // rabbit can also use animal's function
  rabbit.walk(); // Output: Animal is walking

  
  // If we add our own property with the same name, it hides the one from animal
  rabbit.eats = false;

  
  console.log(rabbit.eats);   // false → rabbit's own value
  console.log(animal.eats);   // true → animal is not changed

  
  // Check prototype chain
  console.log(Object.getPrototypeOf(rabbit) === animal);          // true
  console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
  console.log(Object.getPrototypeOf(Object.prototype));           // null

 // __proto__ lets one object use another object’s properties.

// rabbit doesn’t have eats, so it looks up to animal.

// If you set rabbit.eats = false, it stops looking at animal and uses its own value.

// This is called prototype chaining, like "inheritance" in other languages.
  