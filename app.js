const express = require('express');
const app = express();

app.use(express.json());

const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api', contactRoutes);
app.use('/api', authRoutes);

const PORT = 8000;
app.get('/test', (req, res) => res.send('Server is alive!'));
app.get('/', (req, res) => res.send("Home page"))
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});