/* 
- document has hundreds of methods and properties on it in MDN
- go to MDN and see the methods and properties for the document object
- we can use these to select elements
*/

/* 5 Common ways to access an element */

const first = document.getElementById("first"); /* put name of ID in as a string. the browser with search the html tree structure and return the first element that has that id */
console.log(first);