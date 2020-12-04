const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');
const comparacao = require('./comparacao');
app = express();    
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());


app.post('/performance',(req,res)=>{
    var data = req.body.data;
    console.log(data.input)
    var result = comparacao(data.input);
    console.log(result)
    res.json(result);
})


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
