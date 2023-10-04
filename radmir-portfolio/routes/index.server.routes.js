const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.get('/about', function(req, res, next) {
res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) {
res.render('projects', { title: 'Projects' });
});
router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});

module.exports = router;
    