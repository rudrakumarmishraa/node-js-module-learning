import url from "url";

// Creating a url.
const myURL = new URL("https://example.com");
// Setting pathname for url
myURL.pathname = "/a/b/c";
// Search for url
myURL.search = "?d=e";
// Url hash
myURL.hash = "#fgh";
myURL.username = "rudra";
myURL.password = "rudrapassword";
myURL.port = "443";
// Printting url object
console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.protocol);
console.log(myURL.username);
console.log(myURL.password);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.hash);