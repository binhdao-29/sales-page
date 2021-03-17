const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db');
const productRoute = require('../routes/product.route');
const userRoute = require('../routes/user.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/products', productRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
  res.send('Server is running...')
})

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
