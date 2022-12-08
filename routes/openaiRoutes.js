const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

router.post('/generateimage', (req, res) => {
    res.status(200).json({
        success: true,
    })
});

module.exports = router;