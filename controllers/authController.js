const login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

module.exports = { login };