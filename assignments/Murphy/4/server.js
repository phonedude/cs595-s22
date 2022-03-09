const express = require('express')
const port = '4000'
const app = express()

//Static Files
app.use(express.static('public'))
app.use('imgs', express.static(__dirname + 'public/imgs'))

//Set Views
app.set('views', './views')
app.set('view engine', 'ejs')


//Get pages
app.get('/', (req, res) => {
    res.render('homepage')
})

app.get('/rage-against-the-machine', (req, res) => {
    res.render('rage-against-the-machine')
})

app.get('/pokemon-gold', (req, res) => {
    res.render('pokemon-gold')
})

app.get('/star-wars-rogue-one', (req, res) => {
    res.render('star-wars-rogue-one')
})

app.get('/iframe-html-pages', (req, res) => {
    res.render('iframe-html-pages')
})

app.get('/html-1', (req, res) => {
    res.render('html-1')
}) 

app.get('/html-2', (req, res) => {
    res.render('html-2')
}) 

app.get('/html-3', (req, res) => {
    res.render('html-3')
}) 

app.get('/html-4', (req, res) => {
    res.render('html-4')
}) 

app.get('/html-5', (req, res) => {
    res.render('html-5')
}) 

app.get('/html-6', (req, res) => {
    res.render('html-6')
}) 

app.get('/html-7', (req, res) => {
    res.render('html-7')
}) 

app.get('/html-8', (req, res) => {
    res.render('html-8')
}) 

app.get('/html-9', (req, res) => {
    res.render('html-9')
}) 

app.get('/html-10', (req, res) => {
    res.render('html-10')
}) 

app.get('/html-11', (req, res) => {
    res.render('html-11')
}) 

app.get('/html-12', (req, res) => {
    res.render('html-12')
}) 

app.get('/html-13', (req, res) => {
    res.render('html-13')
}) 

app.get('/html-14', (req, res) => {
    res.render('html-14')
}) 

app.get('/html-15', (req, res) => {
    res.render('html-15')
}) 

app.get('/html-16', (req, res) => {
    res.render('html-16')
}) 

app.get('/html-17', (req, res) => {
    res.render('html-17')
}) 

app.get('/html-18', (req, res) => {
    res.render('html-18')
}) 

app.get('/html-19', (req, res) => {
    res.render('html-19')
}) 

app.get('/html-20', (req, res) => {
    res.render('html-20')
}) 

app.get('/html-21', (req, res) => {
    res.render('html-21')
}) 

app.get('/html-22', (req, res) => {
    res.render('html-22')
}) 

app.get('/html-23', (req, res) => {
    res.render('html-23')
}) 

app.get('/html-24', (req, res) => {
    res.render('html-24')
}) 

app.get('/html-25', (req, res) => {
    res.render('html-25')
}) 

app.get('/html-26', (req, res) => {
    res.render('html-26')
}) 

app.get('/html-27', (req, res) => {
    res.render('html-27')
}) 

app.get('/html-28', (req, res) => {
    res.render('html-28')
}) 

app.get('/html-29', (req, res) => {
    res.render('html-29')
}) 

app.get('/html-30', (req, res) => {
    res.render('html-30')
}) 

app.get('/html-31', (req, res) => {
    res.render('html-31')
}) 

app.get('/html-32', (req, res) => {
    res.render('html-32')
}) 

app.get('/html-33', (req, res) => {
    res.render('html-33')
}) 

app.get('/html-34', (req, res) => {
    res.render('html-34')
}) 

app.get('/html-35', (req, res) => {
    res.render('html-35')
}) 

app.get('/html-36', (req, res) => {
    res.render('html-36')
}) 

app.get('/html-37', (req, res) => {
    res.render('html-37')
}) 

app.get('/html-38', (req, res) => {
    res.render('html-38')
}) 

app.get('/html-39', (req, res) => {
    res.render('html-39')
}) 

app.get('/html-40', (req, res) => {
    res.render('html-40')
}) 

app.get('/html-41', (req, res) => {
    res.render('html-41')
}) 

app.get('/html-42', (req, res) => {
    res.render('html-42')
}) 

app.get('/html-43', (req, res) => {
    res.render('html-43')
}) 

app.get('/html-44', (req, res) => {
    res.render('html-44')
}) 

app.get('/html-45', (req, res) => {
    res.render('html-45')
}) 

app.get('/html-46', (req, res) => {
    res.render('html-46')
}) 

app.get('/html-47', (req, res) => {
    res.render('html-47')
}) 

app.get('/html-48', (req, res) => {
    res.render('html-48')
}) 

app.get('/html-49', (req, res) => {
    res.render('html-49')
}) 

app.get('/html-50', (req, res) => {
    res.render('html-50')
}) 

app.get('/html-51', (req, res) => {
    res.render('html-51')
}) 

app.get('/html-52', (req, res) => {
    res.render('html-52')
}) 

app.get('/html-53', (req, res) => {
    res.render('html-53')
}) 

app.get('/html-54', (req, res) => {
    res.render('html-54')
}) 

app.get('/html-55', (req, res) => {
    res.render('html-55')
}) 

app.get('/html-56', (req, res) => {
    res.render('html-56')
}) 

app.get('/html-57', (req, res) => {
    res.render('html-57')
}) 

app.get('/html-58', (req, res) => {
    res.render('html-58')
}) 

app.get('/html-59', (req, res) => {
    res.render('html-59')
}) 

app.get('/html-60', (req, res) => {
    res.render('html-60')
}) 

app.get('/html-61', (req, res) => {
    res.render('html-61')
}) 

app.get('/html-62', (req, res) => {
    res.render('html-62')
}) 

app.get('/html-63', (req, res) => {
    res.render('html-63')
}) 

app.get('/html-64', (req, res) => {
    res.render('html-64')
}) 

app.get('/html-65', (req, res) => {
    res.render('html-65')
}) 

app.get('/html-66', (req, res) => {
    res.render('html-66')
}) 

app.get('/html-67', (req, res) => {
    res.render('html-67')
}) 

app.get('/html-68', (req, res) => {
    res.render('html-68')
}) 

app.get('/html-69', (req, res) => {
    res.render('html-69')
}) 

app.get('/html-70', (req, res) => {
    res.render('html-70')
}) 

app.get('/html-71', (req, res) => {
    res.render('html-71')
}) 

app.get('/html-72', (req, res) => {
    res.render('html-72')
}) 

app.get('/html-73', (req, res) => {
    res.render('html-73')
}) 

app.get('/html-74', (req, res) => {
    res.render('html-74')
}) 

app.get('/html-75', (req, res) => {
    res.render('html-75')
}) 

app.get('/html-76', (req, res) => {
    res.render('html-76')
}) 

app.get('/html-77', (req, res) => {
    res.render('html-77')
}) 

app.get('/html-78', (req, res) => {
    res.render('html-78')
}) 

app.get('/html-79', (req, res) => {
    res.render('html-79')
}) 

app.get('/html-80', (req, res) => {
    res.render('html-80')
}) 

app.get('/html-81', (req, res) => {
    res.render('html-81')
}) 

app.get('/html-82', (req, res) => {
    res.render('html-82')
}) 

app.get('/html-83', (req, res) => {
    res.render('html-83')
}) 

app.get('/html-84', (req, res) => {
    res.render('html-84')
}) 

app.get('/html-85', (req, res) => {
    res.render('html-85')
}) 

app.get('/html-86', (req, res) => {
    res.render('html-86')
}) 

app.get('/html-87', (req, res) => {
    res.render('html-87')
}) 

app.get('/html-88', (req, res) => {
    res.render('html-88')
}) 

app.get('/html-89', (req, res) => {
    res.render('html-89')
}) 

app.get('/html-90', (req, res) => {
    res.render('html-90')
}) 

app.get('/html-91', (req, res) => {
    res.render('html-91')
}) 

app.get('/html-92', (req, res) => {
    res.render('html-92')
}) 

app.get('/html-93', (req, res) => {
    res.render('html-93')
}) 

app.get('/html-94', (req, res) => {
    res.render('html-94')
}) 

app.get('/html-95', (req, res) => {
    res.render('html-95')
}) 

app.get('/html-96', (req, res) => {
    res.render('html-96')
}) 

app.get('/html-97', (req, res) => {
    res.render('html-97')
}) 

app.get('/html-98', (req, res) => {
    res.render('html-98')
}) 

app.get('/html-99', (req, res) => {
    res.render('html-99')
}) 

app.get('/html-100', (req, res) => {
    res.render('html-100')
}) 





app.listen(port)