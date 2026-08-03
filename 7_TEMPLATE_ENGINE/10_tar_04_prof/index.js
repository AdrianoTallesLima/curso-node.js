const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//arquivos estaticos (CSS)
app.use(express.static('public'))

const products = [
    { id: 1, title: 'Teclado', price: 100,},
    { id: 2, title:'Mouse', price: 50,},
    { id: 3, title:'Monitor', price: 800,}
]

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.get('/product/:id', (req, res) => {
    const product = products[parseInt(req.params.id) -1]

    res.render('product', { product })
})

//PORTA
app.listen(3000, () => {
    console.log('App funcionando')
})