const path = require('path');

//Base filename
// console.log(path.basename(__filename));

//Dir filename
// console.log(path.dirname(__filename));

//file ext
// console.log(path.extname(__filename));

//create path object
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).root);

//concatenate paths
console.log(path.join(__dirname,'test','hello.html'));


