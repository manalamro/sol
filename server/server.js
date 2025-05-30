const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data', 'plans.json');

// Read plans from file
const readPlans = () => {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(rawData);
};

// Write plans to file
const writePlans = (plans) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(plans, null, 2));
};

// Get all plans
app.get('/api/plans', (req, res) => {
  const plans = readPlans();
  res.json(plans);
});

// Add new plan
app.post('/api/plans', (req, res) => {
  const plans = readPlans();
  const newPlan = { id: Date.now(), ...req.body };
  plans.push(newPlan);
  writePlans(plans);
  res.status(201).json(newPlan);
});

// Delete plan by ID
app.delete('/api/plans/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let plans = readPlans();
  plans = plans.filter((plan) => plan.id !== id);
  writePlans(plans);
  res.status(200).json({ message: 'Plan deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
