// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const catSchema = new Schema({
//     Name: { type: String, required: true },
//     Age: { type: Number, required: true, min: 0 },
//     catId: { type: String, required: true }
// })


// const Cat = mongoose.model('Cat', catSchema)


// mongoose
//     .connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
//     .then(() => {
//         console.log('Database online!')

//         Cat
//             .create({
//                 Name: 'Ana',
//                 Age: 3,
//                 catId: 11111
//             })


//         Cat
//             .find()
//             .then((cats) => console.log(cats)
//             )


//     });
// ______________________________________________
// const http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Contenc-Type': 'text/html' });
//     res.write('<H1>Hellooooooooo<H1>');
//     res.end();
// }).listen(3000);
// console.log('listening............');
// ______________________________________________
// const express = require('express');

// const app = express();


// app.get("/", function (req, res) {
//     res.send('Helllooooooo madafacka');
// })

// app.get("/test", function (req, res) {
//     res.send('Yea');
// })

// app.listen(3000, () => console.log("It's working!!!!")
// )

