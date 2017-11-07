const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views');

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Listening on port ${PORT}');
});


app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
  })


app.get('/index.html', (req,res)=>{
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
})

