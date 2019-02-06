const fs = require('fs');

// READ
fs.readFile('./hello.txt', (err, data) => {
    console.time('funchallenge');
    if (err) {
        console.log('errrrrrrr');
    }
    console.log('Async', data.toString('utf8'));
    console.timeEnd('funchallenge');
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString('utf8'));

// APPEND
fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.log(err)
    }
})

// WRITE
fs.writeFile('./bad.txt', ' Sad to see you go...', err => {
    if (err) {
        console.log(err)
    }
})

// DELETE
fs.unlink('./bad.txt', err => {
    if (err) {
        console.log(err)
    }
})

