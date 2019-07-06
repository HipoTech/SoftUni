const expect = require('chai').expect;
const SoftUniFy = require('../03. Softunify_Ресурси').SoftUniFy;


// let sofunify = new SoftUniFy();

// sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
// sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
// sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

// console.log(sofunify.allSongs);


describe('propetries', function () {
    
    it('toHaveProperties property', function () {
        let result = new SoftUniFy();
        expect(result.allSongs).deep.equal({},'Do not have property allSongs');
    })
    it('downloadSong functionality', function () {
        let result = new SoftUniFy();
        result.downloadSong('Pesho', 'My name', 'Ooo pesho pesho');
        expect(result.allSongs).deep.equal({'Pesho': {rate: 0, votes: 0, songs: ['My name - Ooo pesho pesho']}},'Do not have property allSongs');
        // expect(result.songs).to.equal('undefined','Do not have property allSongs');
    })
    it('playSong functionality', function () {
        let result = new SoftUniFy();
        expect(result.playSong('My name')).to.equal(`You have not downloaded a My name song yet. Use SoftUniFy's function downloadSong() to change that!`,'You dont have any songs');
    })
    it('rateArtist functionality', function () {
        let result = new SoftUniFy();
        expect(result.rateArtist('My name')).to.equal(`The My name is not on your artist list.`);
    })
});