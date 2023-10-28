// Http library imported and Created an object.
import http from "http";

// Specified port for http server to be hosted.
const port = 80;

// Created server which takes a callback with parameter request and response.
const server = http.createServer((request, response) => {
    // Printting request url. 
    console.log(request.url);
    // Setting header for response
    response.setHeader('Content-Type', 'text-html');
    if (request.url == "/") {
        // Setting Http Status Code 200 OK.
        response.statusCode = 200;
        response.write('<h1>Home</h1>');
    }
    else {
        // Setting Http Status Code 404 Not found.
        response.statusCode = 404;
        response.write('<h1>Not Found</h1>');
    }
    response.end();
});

// Start listening on port 80
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});