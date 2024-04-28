// Destructuring assignment to get the 'writeFile' and 'readFile' functions from the 'fs' module
const {writeFile, readFile} = require('fs');

// Destructuring assignment to get the 'promisify' function from the 'util' module
const {promisify} = require('util');

// Using 'promisify' to convert 'readFile' and 'writeFile' functions to async functions
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// Async function to handle file operations
const fileHandler = async () => {
  try {
    // Write data to a new file called 'writeMe.txt'
    await writeFileAsync('./writeMe.txt', "hello\nworld");

    try {
      // Read data from the 'writeMe.txt' file
      const data = await readFileAsync('./writeMe.txt', 'utf-8');
      console.log('New file has been created.');
      console.log(data);
    } catch (error) {
      // Throw an error if reading the file fails
      throw error;
    }
  } catch (error) {
    // Throw an error if writing the file fails
    throw error;
  }
};

// Call the 'fileHandler' function to execute the file operations
fileHandler();

//node fileHandle.js