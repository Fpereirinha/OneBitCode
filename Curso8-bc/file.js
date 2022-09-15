import * as fs from 'fs';
fs.writeFile('test.txt', 'Olá runtime', err => {
    console.log(err)
})