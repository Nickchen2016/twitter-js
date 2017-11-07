const express = require( 'express' );
const app = express(); // creates an instance of an express application

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Listening on port ${PORT}');
});


app.use(function (req, res, next) {
 
    console.log(req.method, req.url);
    next();
  })


app.get('/', (req,res)=>{
    res.send('hello');
   
})
