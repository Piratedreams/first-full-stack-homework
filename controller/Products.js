const express = require('express');
const router = express.Router();
const product = require('./models');



// index products
router.get('/index.ejs', (req, res) => {
    product.find({}, (err, allProducts) => {
        if(err){
            console.log(err);
        } else {
            console.log(allProducts);
            res.show('index.ejs', {products: allProducts});
        }
    })
});

// create products
router.post('/', (req, res) => {
    product.create(req.body, (err, createdProduct) => {
        if(err) {
            console.log(err);
        } else {
            console.log(createdProduct);
            res.redirect('index.ejs');
        }
    })
    router.get('/new', (req, res) => {
        res.render('new.ejs');
    })
});


// Edit products
router.put('/:id', (req, res) => {
    product.findByIdAndUpdate(req.params.id, req.body, (err, updateProducts) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect('edit.ejs')
        }
    })
});






module.exports = router;