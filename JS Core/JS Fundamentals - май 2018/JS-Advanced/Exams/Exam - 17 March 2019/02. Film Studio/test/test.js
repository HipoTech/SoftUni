const expect = require('chai').expect;
const FilmStudio = require('../filmStudio').FilmStudio;

describe('FilmStudio', function () {
    it('studioName and films', function () {
        const newFilmStudio = new FilmStudio('Name');
        expect(newFilmStudio.name).to.equal('Name', 'Name Of The Studio')
    })
    it('studioName and films', function () {
        const newFilmStudio = new FilmStudio('Name');
        expect(newFilmStudio.films).to.deep.equal([], 'Name Of The Studio')
    })
    it('studioName and films', function () {
        const newFilmStudio = new FilmStudio('Name');
        expect(newFilmStudio.makeMovie('filmName', ['role1', 'role2', 'role3'])).to.deep.equal({
            filmName: 'filmName',
            filmRoles:
                [{ role: 'role1', actor: false },
                { role: 'role2', actor: false },
                { role: 'role3', actor: false }]
        }, 'make Movie')
    })
    it('studioName and films', function () {
        const newFilmStudio = new FilmStudio('Name');
        newFilmStudio.makeMovie('filmName', ['role1', 'role2', 'role3']);
        expect(newFilmStudio.makeMovie('filmName', ['role1', 'role2', 'role3'])).to.deep.equal({
            filmName: 'filmName 2',
            filmRoles:
                [{ role: 'role1', actor: false },
                { role: 'role2', actor: false },
                { role: 'role3', actor: false }]
        }, 'make Movie Sequal')
    })
    it('casting()', function () {
        const newFilmStudio = new FilmStudio('Name');
        newFilmStudio.makeMovie('filmName', ['role1', 'role2', 'role3']);
        expect(newFilmStudio.casting('actorName', 'role1')).to.equal('You got the job! Mr. actorName you are next role1 in the filmName. Congratz!', 'actor got the role');
        expect(newFilmStudio.casting('actorName', 'role10')).to.equal('actorName, we cannot find a role10 role...', 'actor do not the role');
    })
    it('lookForProducer()', function () {
        const newFilmStudio = new FilmStudio('Name');
        newFilmStudio.makeMovie('filmName', ['role1']);
        newFilmStudio.casting('actorName', 'role1');
        expect(newFilmStudio.lookForProducer('filmName')).to.equal('Film name: filmName\nCast:\nactorName as role1\n', 'foundTheMovie');

    })
    it('lookForProducer()', function () {
        const newFilmStudio = new FilmStudio('Name');
        newFilmStudio.makeMovie('filmName', ['role1']);
        expect(() => newFilmStudio.lookForProducer('H')).to.throw('H do not exist yet, but we need the money...');

    })
})
