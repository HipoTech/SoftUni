const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
    Name: { type: String, required: true },
    Age: { type: Number, required: true, min: 0 },
    catId: { type: String, required: true }
})


const Cat = mongoose.model('Cat', catSchema)




mongoose
    .connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
    .then(() => {
        console.log('Database online!')

        // Cat
        //     .create({
        //         Name: 'Ana',
        //         Age: 3,
        //         catId: 11111
        //     })


        Cat
            .find()
            .then((cats) => console.log(cats)
            )


    });