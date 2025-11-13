import express from 'express';

const router = express.Router();

const users = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'abcd' }
];

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  const foundUser = users.find(u => u.username === username && u.password === password);

  if (!foundUser) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful' });
});

module.exports = router;