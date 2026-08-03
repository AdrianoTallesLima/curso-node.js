const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//da forma abaixo é possivel interpolar valores de bckend no front
app.get('/', (req, res) => {
    const user = {
        name: 'Adriano',
        surname: "Talles",
        age: "37"
    }

    const palavra = 'TESTE'
    res.render('home', {user: user, palavra}) //a variavel so fica disponivel no front se colocar ela aqui
})

app.listen(3000, () => {
    console.log('App funcionando')
})
