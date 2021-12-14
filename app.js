

var  express = require('express') ;
var app = express() ;

app.set('view engine' , 'ejs') ;
app.use('/public' , express.static('public')) ;

app.get('/' , function ( req , res) {
   
  res.render( "aicha")
 
});


app.listen(3000)   ;



