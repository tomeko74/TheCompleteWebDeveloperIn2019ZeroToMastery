const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrrrrrr');
    }
    console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString('utf8'));

fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.log(err)
    }
})

fs.writeFile('./bad.txt', ' Sad to see you go...', err => {
    if (err) {
        console.log(err)
    }
})
