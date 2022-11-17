const express = require('express')
const router = express.Router()
const medicineController = require('../controllers/medicine.controller');
// Retrieve all employees
router.get('/', medicineController.findAll);
// Create a new employee
router.post('/', medicineController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id
router.put('/:Medicine_Store_ID', medicineController.update);
// Delete a employee with id
router.delete('/:Medicine_Store_ID', medicineController.delete);
module.exports = router