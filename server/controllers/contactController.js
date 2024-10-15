const db = require('../config/db');

// Insert contact form data into MySQL
exports.submitContactForm = (req, res) => {
  const { name, email, phone, message, role } = req.body;

  if (!name || !email || !phone || !message || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO contacts (name, email, phone, message, role) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, message, role], (err, result) => {
    if (err) {
      console.error('Database insertion error:', err);
      return res.status(500).json({ message: 'Failed to submit form' });
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
};
