/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const Contact = require('./models/Contact')
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
	name: String,
	number: String
})

const ContactNew = mongoose.model('ConatactNew', contactSchema)
mongoose
	.connect('mongodb://localhost:27017/Phonebook', { useNewUrlParser: true })
	.then(() => {
		console.log('Database online!, requested phonebook')
	})

function getAll() {
	return ContactNew.find({});
}

function addNumber(req) {
	let { name, number } = req.body;
	let contact = new Contact(name, number);
	mongoose
		.connect('mongodb://localhost:27017/Phonebook', { useNewUrlParser: true })
		.then(() => {
			console.log('Database online!, adding contact!')
			ContactNew.create(contact);
		})
}

module.exports = {
	addNumber,
	getAll
}