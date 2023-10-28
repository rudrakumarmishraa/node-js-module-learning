// Importing local library
const object = require('./objects.js');


// Printing object values
console.log(object);
console.log(object.one);
console.log(object.two);


// OS Module
const os = require('os');
// Free memory in pc.
console.log(os.freemem());
// Home directory.
console.log(os.homedir());
// Hostname of pc.
console.log(os.hostname());
// Platform of pc.
console.log(os.platform());
// Release version of operating system.
console.log(os.release());
// Uptime of os
console.log(os.uptime());


// Path module.
const path = require('path');
// Basename of file.
console.log(path.basename('C:\\Users\\Rudra Kumar Mishra\\Documents\\Intership.MakeIndias\\Oct28\\second.js'));
// Delimiter of the platform.
console.log(path.delimiter);
// Director name of the file passed.
console.log(path.dirname('C:\\Users\\Rudra Kumar Mishra\\Documents\\Intership.MakeIndias\\Oct28\\second.js'));
// Extension of file.
console.log(path.extname(__filename));
// Path formatting.
console.log(
    path.format({
        dir: 'C:\\Users',
        base: 'file.txt',
      })
);
// The path.isAbsolute() method determines if path is an absolute path.
console.log(path.isAbsolute("C:\\Users"));

// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
console.log(path.join("C:", "Users", "Rudra Kumar Mishra", "Documents"));