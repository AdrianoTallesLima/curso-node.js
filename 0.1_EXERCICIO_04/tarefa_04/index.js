const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine({
    partialsDir: 'views/partials'
}))

//arquivos estaticos (CSS)
app.use(express.static('public'))

//configurar handlebars com partials
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const products = [
    { id: 1, name: 'Teclado', price: 100, premium: false },
    { id: 2, name: 'Mouse', price: 50, premium: true },
    { id: 3, name: 'Monitor', price: 800, premium: true }
]

app.get('/', (req, res) => {
    res.render('home', { products })
})

app.get('/product/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const product = products.find(p => p.id === id)

    res.render('product', { product })
})

//PORTA
app.listen(3000, () => {
    console.log('App funcionando')
})