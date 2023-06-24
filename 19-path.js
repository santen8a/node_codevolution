const path = require("node:path")

console.log(__filename);
console.log(__dirname);

// print base
console.log(path.basename(__filename));

//extensoin
console.log(path.extname(__filename));

console.log(path.extname(__dirname));

//partse
console.log(path.parse(__filename));