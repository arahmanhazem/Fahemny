const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');



const app = express();
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));