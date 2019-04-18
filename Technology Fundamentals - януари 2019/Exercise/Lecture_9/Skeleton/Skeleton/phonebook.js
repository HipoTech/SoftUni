/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
const Contact = require('./models/Contact')



function getAll() {
	return ContactNew.find({});
}

function addNumber(req) {
	let { name, number } = req.body;
	let contact = new Contact(name, number);
	ContactNew.create(contact)
		.then(() => {
			return res.redirect('/');
		})
		.catch((err) => console.warn(err)
		);
}

module.exports = {
	addNumber,
	getAll
}