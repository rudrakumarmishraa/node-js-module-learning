// File FS library imported and Created an object.
const fs = require('fs');

// ReadFile function is asynchonous function. | Non-Blocking IO
fs.readFile('objects.js', "utf-8", (error, data) => {
    if (error) {
        console.log("Error : ", error);
    }else{
        console.log(data);
    }
});
console.log("Finished reading file.");

// WriteFile function is synchonous function. | Blocking IO
const b = fs.writeFile('file.md', "Data to be Written", () => {
    console.log("Finished writting file.");
});

// ReadFileSync function is synchonous function. | Blocking IO
const a = fs.readFileSync('objects.js');
console.log(a.toString());
console.log("Finished reading file.");

// WriteFileSync function is synchonous function. | Blocking IO
const c = fs.writeFileSync('filee.md', "Data2 to be Written");
console.log("Done");

// Append methods
fs.appendFile("file.md", "data data", () => {
    console.log("Finished appending file.");
});
fs.appendFileSync("file.md", "data");