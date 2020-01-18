const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    // TODO: load index page
    phonebook.getAll().then((person) => {
      let map = new Map();
      let contacts = []
      for (let kvp of person) {
        map.set(kvp.name, kvp.number)
      }
      for (const kvp of map) {
        let list = {}
        list['name'] = kvp[0];
        list['number'] = kvp[1];
        contacts.push(list);
      }
      return res.render('index', { contacts: contacts })
    })
  },
  addPhonebookPost: (req, res) => {
    // TODO: add a phonebook object to the array
    phonebook.addNumber(req);

  }
}