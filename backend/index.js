const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');
app = express();    
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());




// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
