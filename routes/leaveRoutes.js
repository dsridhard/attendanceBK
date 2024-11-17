const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const leavesFilePath = path.join(__dirname, '../storage/leaves.json');

// Utility function to read data from JSON
const readLeaves = () => {
  const data = fs.readFileSync(leavesFilePath, 'utf8');
  return JSON.parse(data || '[]');
};

// Utility function to write data to JSON
const writeLeaves = (data) => {
  fs.writeFileSync(leavesFilePath, JSON.stringify(data, null, 2));
};

// Get all leave records
router.get('/', (req, res) => {
  try {
    const leaves = readLeaves();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leave records' });
  }
});

// Add a new leave record
router.post('/', (req, res) => {
  try {
    const newLeave = req.body;
    const leaves = readLeaves();
    leaves.push(newLeave);
    writeLeaves(leaves);
    res.status(201).json({ message: 'Leave record added successfully', leave: newLeave });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add leave record' });
  }
});

// Delete a leave record by ID (example)
router.delete('/:id', (req, res) => {
  try {
    const leaveId = req.params.id;
    let leaves = readLeaves();
    leaves = leaves.filter((leave) => leave.id !== leaveId);
    writeLeaves(leaves);
    res.json({ message: 'Leave record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete leave record' });
  }
});

module.exports = router;
