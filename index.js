const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git')
const random = require('random')

const FILE_PATH = './data.json';

function makeCommit(n) {
    if (n === 0) return simpleGit().push();
    let x = random.int(0, 55);
    let y = random.int(0, 7);
    const DATE = moment().subtract(1, 'y').add(28 + y - 1, 'd').add(x - 1, 'w').format();

    console.log(x, y, DATE)

    const data = {
        date: DATE,
    }

    jsonfile.writeFile(FILE_PATH, data, () => {
        //git commit --date=""
        simpleGit().add([FILE_PATH]).commit(
            DATE, {
                '--date': DATE
            }, makeCommit.bind(this, --n));
    });
}

makeCommit(100);

// makeCommit(1, 9);