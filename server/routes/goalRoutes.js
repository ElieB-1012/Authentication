const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  udpateGoal,
  deleteGoal,
} = require('../controller/goalController');

// router.get('/', getGoals);
// router.post('/', setGoal);
// router.put('/:id', udpateGoal);
// router.delete('/:id', deleteGoal);

const {protect} = require('../middleware/authMiddleware')

//same as above just for visibility
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, udpateGoal).delete(protect, deleteGoal);

module.exports = router;
