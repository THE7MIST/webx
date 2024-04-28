const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Readable stream events
readableStream.on('data', (chunk) => {
  console.log('Received chunk of data:', chunk);
});

readableStream.on('end', () => {
  console.log('No more data to read.');
});

// Writable stream events
writableStream.on('finish', () => {
  console.log('Data has been written to the file.');
});

// Create a buffer and write data to it
const buffer = Buffer.from('Hello, Node.js!', 'utf8');
console.log('Buffer:', buffer);

// Convert buffer to string
const str = buffer.toString('utf8');
console.log('String:', str);



//input.txt
//output.txt self
//node stremBuff.js