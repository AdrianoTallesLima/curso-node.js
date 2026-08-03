const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

//da forma abaixo é possivel interpolar valores de bckend no front
app.get('/', (req, res) => {
    const user = {
        name: 'Adriano',
        surname: "Talles",
        age: "37"
    }

    const auth = true

    const approved = false

    res.render('home', {user: user, auth, approved}) //a variavel so fica disponivel no front se colocar ela aqui
})

app.listen(3000, () => {
    console.log('App funcionando')
})
