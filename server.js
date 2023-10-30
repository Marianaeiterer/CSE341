// express web server
const express = require('express');
const app = express();
const lession1Controller = require('./controllers/lesson1');
 
app.get('/', lession1Controller.mariRoute);

app.get('/hannah', lession1Controller.hannaRoute );

const port = 3000;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});