const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
// app.use is how we use the middleware GLOBALLY
// could make a function and then put 
//app.use(myFunction)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //this is built in express to look at body of post request
app.use(express.static('public'));



app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

