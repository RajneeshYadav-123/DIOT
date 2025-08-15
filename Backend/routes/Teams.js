const express = require('express');
const router = express.Router();
const { TeamDetails, getTeams } = require('../controllers/Team');

router.post('/teams', TeamDetails);   
router.get('/teams', getTeams);       

module.exports = router;


