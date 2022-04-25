
// server start
// install : 1. npm init -y
//           2. npm i express cors dotenv mongo
   
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// middleware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('John is running and waiting for ema')
});

app.listen(port, () => {
    console.log('John is running on port', port);
})