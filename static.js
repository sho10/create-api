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

app.get('/customer/:customerId', (req,res) => {
    var customerName;
    for(index in customerList){
        if(customerList[index].ID == req.params.customerId){
            customerName = customerList[index].name;
        }
    }
    if(customerName!=undefined){
        res.send('Customer ID:'+req.params.customerId+' has a name:'+customerName);
    }else{
        res.send('Customer ID:'+req.params.customerId+' does not exist');
    }
})

app.get('/customers', (req,res) => {
   res.send(customerList);
})

app.post('/welcome', (req,res) => {
  res.send('You called POST');
})
app.listen(3000);
