const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Check eligibility
router.get('/check-eligibility/:rollNumber', async (req, res) => {
  try {
    const { rollNumber } = req.params;
    const student = await Student.findOne({ rollNumber });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const isEligible = student.attendance >= 85 && student.marks >= 60;
    res.json({ isEligible, certificateGenerated: student.certificateGenerated });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
