const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 3000;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data', 'plans.json');

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

// Utility: Read/Write plans
const readPlans = () => {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(rawData);
};

const writePlans = (plans) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(plans, null, 2));
};

// Middleware: Authenticate admin
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err || decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden' });
    }
    req.user = decoded;
    next();
  });
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login request:', req.body); // DEBUG

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const token = jwt.sign({ role: 'admin', username }, SECRET_KEY, { expiresIn: '1h' });
    console.log(`Login successful for user: ${username}`);  // Add this
    return res.json({ token, role: 'admin', message: 'Login successful' });
  } else {
    console.log(`Login failed for user: ${username}`);  // Add this
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});




// GET plans (open to all)
app.get('/api/plans', (req, res) => {
  const plans = readPlans();
  res.json(plans);
});

// POST plan (admin only)
app.post('/api/plans', authenticateAdmin, (req, res) => {
  const plans = readPlans();
  const newPlan = { id: Date.now(), ...req.body };
  plans.push(newPlan);
  writePlans(plans);
  res.status(201).json(newPlan);
});

// DELETE plan (admin only)
app.delete('/api/plans/:id', authenticateAdmin, (req, res) => {
  const id = parseInt(req.params.id);
  let plans = readPlans();
  plans = plans.filter((plan) => plan.id !== id);
  writePlans(plans);
  res.status(200).json({ message: 'Plan deleted' });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
