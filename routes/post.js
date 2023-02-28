const router = require('express').Router();

router.get("/",(req,res) => {
    res.json({
        id: '234',
        title: "hello",
        img: 'TFHGJBk'
    })
})
router.get("/all",(req,res) => {
    res.json({
        id: '234',
        title: "KILO",
        img: 'TFHGJBk'
    })
})

module.exports = router;