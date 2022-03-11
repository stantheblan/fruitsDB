const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js')
const dataController = require('./dataController.js')

// add routes
// Index
router.get('/', dataController.index, viewController.index);
// router.get('/', (req, res) => {
//     // Use Fruits model to get all Fruits
//     Fruit.find({}, (error, allFruits) => {
//         res.render('Index', {
//             fruits: allFruits
//         })
//     });
// });

// New
// router.get('/new', (req, res) => {
//     res.render('New');
// });
//==========================================================================

// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome);
// router.delete('/:id', (req, res) => {
//     // Delete document from collection
//     Fruit.findByIdAndRemove(req.params.id, (err, fruit) => {
//         res.redirect('/fruits');
//     });
// });

// Update
router.put('/:id', dataController.update, viewController.redirectShow);
// router.put('/:id', (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === "on" ? true : false;

//     // Update the fruit document using our model
//     Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
//         res.redirect('/fruits');
//     });
// });

// Create
router.post('/', dataController.create, viewController.redirectHome);
// router.post('/', (req, res) => {
//     if (req.body.readyToEat === "on") {
//         req.body.readyToEat = true;
//     } else {
//         req.body.readyToEat = false;
//     }
//     // Use Model to create Fruit Document
//     Fruit.create(req.body, (error, createdFruit) => {
//         // Once created - respond to client
//         res.redirect('/fruits');
//     });
// });

// Edit
router.get('/:id/edit', dataController.show, viewController.edit);
// router.get('/:id/edit', (req, res) => {
//     // Find our document from the collection - using mongoose model
//     Fruit.findById(req.params.id, (err, foundFruit) => {
//         // render the edit view and pass it the found fruit
//         res.render('Edit', {
//             fruit: foundFruit
//         })
//     });
// });

// Show
router.get('/:id', dataController.show, viewController.show);
// router.get('/:id', (req, res) => {
//     // Find the specific document
//     Fruit.findById(req.params.id, (error, foundFruit) => {
//         // render the Show route and pass it the foundFruit
//         res.render('Show', {
//             fruit: foundFruit
//         });
//     });
// });


// export router
module.exports = router;