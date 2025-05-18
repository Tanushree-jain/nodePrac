const express = require('express');
const app = express();
const port = 3000;
const test = require('dotenv')
test.config()

console.log("port",process.env.PORT)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
 const x = 5
 console.log("before x",x)
 function test1(){
     X = 9
 console.log("x",x) 
 }

test1()
console.log("before x",x)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// test