const express = require('express');
const axios = require('axios');
const app = express();
 

const cors = require('cors');
app.use(cors());


app.get('/get/comments', async (req, res) => {
  try 
  {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
    const comments = response.data;
    res.json(comments);
  } 
  catch (error) 
  {
    console.log('cannot fetch the data!!!');
    
  }
});

app.listen(3001, () => {
  console.log(`Server is running!`);
});
