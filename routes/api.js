const express = require('express');
const router = express.Router();
const db = require('../db');

// Get video data
router.get('/video/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM videos WHERE id = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Video not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get quiz data
router.get('/quiz/:video_id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM quizzes WHERE video_id = ?', [req.params.video_id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
