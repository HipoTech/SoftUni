function songEncription(params) {
    let i = 0;
    while (params[i] !== 'end') {
        let [band, song] = params[i].split(':');
        let nameValidation = /\b[A-Z]{1}[a-z ']+/g;
        let songValidation = /\b[A-Z ]+/g;
        let resultOfNameValidation = nameValidation.exec(band);
        let resultOfSongValidation = songValidation.exec(song);
        if (resultOfNameValidation === null || resultOfSongValidation === null) {
            console.log('Invalid input!');
        } else {
            if (resultOfNameValidation[0].length === band.length) {
                if (resultOfSongValidation[0].length === song.length) {
                    let bandName = resultOfNameValidation[0];
                    let songName = resultOfSongValidation[0];
                    let decriptionName = bandName
                        .split('')
                        .map(c => {
                            let newCharNumber = c.charCodeAt(0) + bandName.length;
                            if (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
                                if (newCharNumber > 122) {
                                    return newCharNumber = 96 + (newCharNumber - 122);
                                } else {
                                    return newCharNumber;
                                }
                            } else if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
                                if (newCharNumber > 90) {
                                    return newCharNumber = 64 + (newCharNumber - 90);
                                } else {
                                    return newCharNumber;
                                }
                            }
                            return c.charCodeAt(0);
                        })
                        .map(c => String.fromCharCode(c));
                    let decriptionSong = songName
                        .split('')
                        .map(c => {
                            let newCharNumber = c.charCodeAt(0) + bandName.length;
                            if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) {
                                if (newCharNumber > 90) {
                                    return newCharNumber = 64 + (newCharNumber - 90);
                                } else {
                                    return newCharNumber;
                                }
                            }
                            return c.charCodeAt(0);
                        })
                        .map(c => String.fromCharCode(c));
                    console.log(`Successful encryption: ${decriptionName.join('')}@${decriptionSong.join('')}`);
                    //Wtyvty alcv
                }
            } else {
                console.log('Invalid input!');
            }
        }
        i++;
    }
}
songEncription(['Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    'Guns n\'roses:NOVEMBER RAIN',
    'Christina Aguilera: HuRt',
    'end'])