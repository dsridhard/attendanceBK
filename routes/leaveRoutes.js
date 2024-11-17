const express = require('express');
const Leave = require('../models/leave');

const router = express.Router();

// Create a new leave record
router.post('/', async (req, res) => {
  try {
    const leave = await Leave.create(req.body);
    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all leave records
router.get('/', async (req, res) => {
  try {
    const leaves = await Leave.findAll();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a leave record
router.put('/:id', async (req, res) => {
  try {
    const leave = await Leave.findByPk(req.params.id);
    if (!leave) return res.status(404).json({ error: 'Leave not found' });

    await leave.update(req.body);
    res.json(leave);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a leave record
router.delete('/:id', async (req, res) => {
  try {
    const leave = await Leave.findByPk(req.params.id);
    if (!leave) return res.status(404).json({ error: 'Leave not found' });

    await leave.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
