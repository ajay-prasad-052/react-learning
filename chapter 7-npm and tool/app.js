const http=require('http');
 const requesthandler=require('./user');
 const server =http.createServer (requesthandler);
 const port=3001;
 server.listen(port, ()=>{
  console.log ('server running on adress hhtp://localhost:${port}');

 });