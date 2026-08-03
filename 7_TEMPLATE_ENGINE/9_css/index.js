const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

// uso de with
app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ensinar Node.js...',
        comments: 4,
    }
    res.render('blogpost', { post })
})

//uso de partials
app.get ('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Teste",
            comments: 4
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "Teste",
            comments: 44
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "Teste",
            comments: 3
        }
    ]

    res.render('blog', { posts })
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
