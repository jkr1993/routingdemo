const express = require('express');
const router = express.Router();

console.log("-------employee--------")
router.get('/all', (req,res)=>{
    res.send("<body bgcolor='pink'> <h1 style='color'red;'>Welcome Employee Page");
})

module.exports = router;