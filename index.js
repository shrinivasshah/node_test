const express = require('express');
//importing express in traditional style

const app = express();

app.get('/', (req,res)=>{
    res.send({'hi':'there'});
});

const PORT = process.env.PORT || 5000
app.listen(5000);


