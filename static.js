const express = require('express');
const app = express();
app.use(express.json());

app.use(express.static('output')); //built in middleware

app.get('/', (req,res) => {
  res.send(index.html);
});

var customerList = {
    cust1:{"name":"Cust1","ID":"1"},
    cust2:{"name":"Cust2","ID":"2"},
    cust3:{"name":"Cust3","ID":"3"}
};

app.post('/welcome', (req,res) => {
  res.send('You called POST');
})
app.listen(3000);
