// Http library imported and Created an object.
const http = require('http');
// Object for reading files with fs library.
const fs = require('fs');
// Specified port to listen.
const port = 3000;

// Created http server passed request and response.
const server = http.createServer((request, response) => {
    // Setting response code and response content type.
    response.writeHead(200, {'Content-Type' : 'text-html'});
    // Reading file with fs object
    fs.readFile('index.html', (error, data) => {
        // If error in reading file
        if (error) {
            response.writeHead(404);
            response.write('Error: File not found');
        }
        // If no error encountered.
        else {
            response.write(data);
        }
        response.end();
    });
});

// Started listening on port and passed function to check for errors.
server.listen(port, (error) => {
    // If there is an error
    if (error) {
        console.log('Something went wrong.', error);
    }    
    // If server is running without any error
    else {
        console.log("Server is listening on port ", port);
    }   
});