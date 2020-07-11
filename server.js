const http = require('http');
const fs = require('fs');
const log = require('./logger');

http.createServer((req,res) => {
   if(req.method == 'GET'){
     log('GET method called');
     res.write('you called GET');
     res.end();
   }
   else if (req.method == 'POST'){
     log('POST method called');
     res.write('You called POST');
     res.end();
   }
}).listen(3000, () => {
  log('listening on port 3000');
})
