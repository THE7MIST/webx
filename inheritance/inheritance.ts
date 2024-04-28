// Base class
class Animal {
    // Properties
    name: string;
    age: number;
  
    // Constructor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    makeSound(): void {
      console.log('Animal makes a sound');
    }
  }
  
  // Derived class (inherits from Animal)
  class Dog extends Animal {
    // Additional property
    breed: string;
  
    // Constructor
    constructor(name: string, age: number, breed: string) {
      // Call base class constructor
      super(name, age);
      // Initialize additional property
      this.breed = breed;
    }
  
    // Overriding method from base class
    makeSound(): void {
      console.log('Dog barks');
    }
  
    // New method specific to Dog class
    wagTail(): void {
      console.log('Dog wags tail');
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog('Buddy', 3, 'Labrador');
  
  // Access properties and methods
  console.log('Name:', myDog.name);
  console.log('Age:', myDog.age);
  console.log('Breed:', myDog.breed);
  myDog.makeSound(); // This will call the overridden method in Dog class
  myDog.wagTail();   // This will call the method specific to Dog class
  

  
  //npm -v
  //node -v
  //npm install -g typescript
  //tsc -v

  //tsc arithmatics.ts
  //node arithmatics.js