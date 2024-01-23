const express = require('express');
const app = express();
const mongodb = require('./db');
mongodb();
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json())
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
