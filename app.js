const express= require('express')
const app = express()
const port =3000
const router = express.Router()
// const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs')

app.use('/', express.static('styles/style.css'));

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.set('view engine', 'ejs');
// app.use(expressLayouts);

app.get('/',(req,res)=>{
    res.render("index.ejs")
})

app.get('/blog',(req,res)=>{
    res.render("views/blog.ejs")
})

app.get('/contact',(req,res)=>{
    res.render("views/contact.ejs")
})

app.get('/menu',(req,res)=>{
    res.render("views/menu.ejs")
})

app.get('/products',(req,res)=>{
    res.render("views/products.ejs")
})

app.get('/review',(req,res)=>{
    res.render("views/review.ejs")
})

app.use(express.static('public')) //static dosyayı okumak için gerekli olan middleware


app.listen(port, ()=>{
    console.log('çalıştı')
})
module.exports = router