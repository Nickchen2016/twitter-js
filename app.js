const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes');
app.use('/', routes);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
  })



