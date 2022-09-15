import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('<h1> My task list </h1>')
    res.code = 200
    console.log(res.code)
})

app.listen(3000 , () => {
    console.log('Iniciado.')
})