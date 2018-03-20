const express = require('express');
const router = express.Router({strict:true});

const detail = require('./detail');
const list = require('./list');

router.get('/items', list);

router.get('/items/:id', detail);

module.exports = router;