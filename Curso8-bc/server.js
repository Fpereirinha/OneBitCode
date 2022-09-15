import * as http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 200;
    res.end('<h1> Pedrao </h1>')


})
server.listen(3000, () => {
    console.log('servidor ativo.')
})